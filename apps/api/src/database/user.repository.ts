import Random from 'randomstring';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcryptjs';
import { Repository, FindOptionsWhere } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity) profileRepo: Repository<UserEntity>,
  ) {
    super(profileRepo);
  }

  async create(newEntity: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    return super.create({
      ...newEntity,
      password: newEntity.password && hashSync(newEntity.password),
    });
  }

  async update(
    conditions: FindOptionsWhere<UserEntity>,
    changes: Partial<UserEntity>,
  ): Promise<void> {
    return super.update(conditions, {
      ...changes,
      password: changes.password ? hashSync(changes.password) : undefined,
    });
  }

  async generateSSO(userID: number): Promise<string> {
    const gameSSO: string = 'imagine_' + Random.generate(50) + '_' + userID;
    await this.update({ id: userID }, { gameSSO });
    return gameSSO;
  }
}

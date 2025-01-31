import Random from 'randomstring';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity) profileRepo: Repository<UserEntity>,
  ) {
    super(profileRepo);
  }
  async generateSSO(userID: number): Promise<string> {
    const gameSSO: string = 'imagine_' + Random.generate(50) + '_' + userID;
    await this.update({ id: userID }, { gameSSO });
    return gameSSO;
  }
}

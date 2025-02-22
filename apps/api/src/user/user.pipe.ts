import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../database/user.repository';
import { UserEntity } from '../database/user.entity';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private readonly userRepo: UserRepository) {}

  async transform(identifier: number | string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: !isNaN(Number(identifier))
        ? { id: Number(identifier) }
        : { username: identifier as string },
      relations: ['rank'],
    });

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    return user;
  }
}

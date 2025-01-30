import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/user.repository';
import { UserEntity } from '../database/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async onlineUsers(): Promise<UserEntity[]> {
    return this.userRepo.find({
      where: {
        onlineStatus: '1',
      },
    });
  }
}

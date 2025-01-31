import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/user.repository';
import { UserEntity } from '../database/user.entity';
import { UserFriendshipEntity } from '../database/user-friendship.entity';
import { UserFriendshipRepository } from '../database/user-friendship.repository';
import { In } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userFriendshipRepo: UserFriendshipRepository,
  ) {}

  async getOnline(): Promise<UserEntity[]> {
    return this.userRepo.find({
      where: {
        onlineStatus: '1',
      },
      take: 5,
    });
  }
  async getFriends(userId: number): Promise<UserEntity[]> {
    const friends: UserFriendshipEntity[] = await this.userFriendshipRepo.find({
      where: { userOneID: userId },
      take: 5,
    });

    if (friends.length === 0) {
      return [];
    }

    return this.userRepo.find({
      where: {
        id: In(friends.map((_) => _.userTwoID!)),
      },
    });
  }

  async getNewest(): Promise<UserEntity[]> {
    return this.userRepo.find({
      order: {
        id: 'DESC',
      },
      take: 5,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/user.repository';
import { UserEntity } from '../database/user.entity';
import { UserFriendshipEntity } from '../database/user-friendship.entity';
import { UserFriendshipRepository } from '../database/user-friendship.repository';
import { In } from 'typeorm';
import { GroupEntity } from '../database/group.entity';
import { GroupMembershipEntity } from '../database/group-membership.entity';
import { GroupMembershipRepository } from '../database/group-membership.repository';
import { GroupRepository } from '../database/group.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userFriendshipRepo: UserFriendshipRepository,
    private readonly groupRepo: GroupRepository,
    private readonly groupMembershipRepo: GroupMembershipRepository,
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
  async getGroups(userId: number): Promise<GroupEntity[]> {
    const groups: GroupMembershipEntity[] = await this.groupMembershipRepo.find(
      {
        where: { userID: userId },
        take: 5,
      },
    );

    if (groups.length === 0) {
      return [];
    }

    return this.groupRepo.find({
      where: {
        id: In(groups.map((_) => _.groupID!)),
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

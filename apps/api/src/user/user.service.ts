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
import { UserBadgeEntity } from '../database/user-badge.entity';
import { UserBadgeRepository } from '../database/user-badge.repository';
import { AchievementDTO } from '../achievement/achievement.dto';
import { UserAchievementRepository } from '../database/user-achievement.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userBadgeRepo: UserBadgeRepository,
    private readonly userFriendshipRepo: UserFriendshipRepository,
    private readonly userAchievementRepo: UserAchievementRepository,
    private readonly groupRepo: GroupRepository,
    private readonly groupMembershipRepo: GroupMembershipRepository,
  ) {}

  async getOnline(): Promise<UserEntity[]> {
    return this.userRepo.find({
      where: {
        onlineStatus: '1',
      },
    });
  }

  async getAchievements(userId: number): Promise<AchievementDTO[]> {
    return this.userAchievementRepo.getInstance().query(
      `
        SELECT users_achievements.achievement_name AS name
        FROM users_achievements
        JOIN achievements ON achievements.name = users_achievements.achievement_name
        WHERE user_id = ?
        AND achievements.progress_needed <= users_achievements.progress
      `,
      [userId],
    );
  }

  async getBadges(userId: number): Promise<UserBadgeEntity[]> {
    return this.userBadgeRepo.find({
      where: { userID: userId },
    });
  }

  async getFriends(userId: number): Promise<UserEntity[]> {
    const friends: UserFriendshipEntity[] = await this.userFriendshipRepo.find({
      where: { userOneID: userId },
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
    });
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { UserEntity } from '../database/user.entity';
import { UserPipe } from './user.pipe';
import { GroupDTO } from '../group/group.dto';
import { GroupEntity } from '../database/group.entity';
import { BadgeDTO } from '../badge/badge.dto';
import { UserBadgeEntity } from '../database/user-badge.entity';
import { AchievementDTO } from '../achievement/achievement.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('online')
  async login(): Promise<UserDTO[]> {
    const onlineUsers: UserEntity[] = await this.userService.getOnline();
    return onlineUsers.map(UserDTO.fromEntity);
  }

  @Get('newest')
  async newest(): Promise<UserDTO[]> {
    const onlineUsers: UserEntity[] = await this.userService.getOnline();
    return onlineUsers.map(UserDTO.fromEntity);
  }

  @Get('/:userID/achievements')
  achievements(
    @Param('userID', UserPipe) user: UserEntity,
  ): Promise<AchievementDTO[]> {
    return this.userService.getAchievements(user.id!);
  }

  @Get('/:userID')
  byId(@Param('userID', UserPipe) user: UserEntity): UserDTO {
    return UserDTO.fromEntity(user);
  }

  @Get('/:userID/badges')
  async badges(
    @Param('userID', UserPipe) user: UserEntity,
  ): Promise<BadgeDTO[]> {
    const badges: UserBadgeEntity[] = await this.userService.getBadges(
      user.id!,
    );
    return badges.map((_) => BadgeDTO.fromCode(_.badgeCode));
  }

  @Get('/:userID/friends')
  async friends(
    @Param('userID', UserPipe) user: UserEntity,
  ): Promise<UserDTO[]> {
    const onlineUsers: UserEntity[] = await this.userService.getFriends(
      user.id!,
    );
    return onlineUsers.map(UserDTO.fromEntity);
  }

  @Get('/:userID/groups')
  async groups(
    @Param('userID', UserPipe) user: UserEntity,
  ): Promise<GroupDTO[]> {
    const userGroups: GroupEntity[] = await this.userService.getGroups(
      user.id!,
    );
    return userGroups.map(GroupDTO.fromEntity);
  }
}

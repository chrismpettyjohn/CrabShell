import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { UserEntity } from '../database/user.entity';
import { UserPipe } from './user.pipe';
import { GroupDTO } from '../group/group.dto';
import { GroupEntity } from '../database/group.entity';

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

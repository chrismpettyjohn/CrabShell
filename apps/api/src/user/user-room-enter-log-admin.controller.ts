import { Controller, Get, Param } from '@nestjs/common';
import { UserPipe } from './user.pipe';
import { UserEntity } from '../database/user.entity';
import { HasScope } from '../auth/has-scope.decorator';
import { UserRoomEnterLogEntity } from '../database/user-room-enter-log.entity';
import { UserRoomEnterLogRepository } from '../database/user-room-enter-log.repository';
import { AdminUserRoomEnterLogDTO } from './user-room-enter-log-admin.dto';

@Controller('admin/users')
export class UserRoomEnterLogAdminController {
  constructor(
    private readonly userRoomEnterLogRepo: UserRoomEnterLogRepository,
  ) {}

  @Get('room-enter-logs')
  @HasScope('manageUsers')
  async getRoomEnterLogsForAllUsers(): Promise<AdminUserRoomEnterLogDTO[]> {
    const roomEnterLogs: UserRoomEnterLogEntity[] =
      await this.userRoomEnterLogRepo.find({
        order: {
          id: 'DESC',
        },
        relations: ['user'],
      });
    return roomEnterLogs.map(AdminUserRoomEnterLogDTO.fromEntity);
  }

  @Get('/:userId/room-enter-logs')
  @HasScope('manageUsers')
  async getRoomEnterLogsByUserId(
    @Param('userId', UserPipe) user: UserEntity,
  ): Promise<AdminUserRoomEnterLogDTO[]> {
    const roomEnterLogs: UserRoomEnterLogEntity[] =
      await this.userRoomEnterLogRepo.find({
        where: {
          userID: user.id!,
        },
        order: {
          id: 'DESC',
        },
        relations: ['user'],
      });
    return roomEnterLogs.map(AdminUserRoomEnterLogDTO.fromEntity);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { UserPipe } from './user.pipe';
import { UserEntity } from '../database/user.entity';
import { HasScope } from '../auth/has-scope.decorator';
import { UserPrivateMessageLogEntity } from '../database/user-private-message-log.entity';
import { AdminUserPrivateMessageLogDTO } from './user-private-message-log-admin.dto';
import { UserPrivateMessageLogRepository } from '../database/user-private-message-log.repository';

@Controller('admin/users')
export class UserPrivateMessageLogAdminController {
  constructor(
    private readonly userPrivateMessageLogRepo: UserPrivateMessageLogRepository,
  ) {}

  @Get('private-message-logs')
  @HasScope('manageUsers')
  async getPrivateMessageLogsForAllUsers(): Promise<
    AdminUserPrivateMessageLogDTO[]
  > {
    const privateMessageLogs: UserPrivateMessageLogEntity[] =
      await this.userPrivateMessageLogRepo.find({
        order: {
          id: 'DESC',
        },
        relations: ['user.rank', 'sentToUser', 'sentToUser.rank'],
      });
    return privateMessageLogs.map(AdminUserPrivateMessageLogDTO.fromEntity);
  }

  @Get('/:userId/private-message-logs')
  @HasScope('manageUsers')
  async getPrivateMessageLogsByUserId(
    @Param('userId', UserPipe) user: UserEntity,
  ): Promise<AdminUserPrivateMessageLogDTO[]> {
    const privateMessageLogs: UserPrivateMessageLogEntity[] =
      await this.userPrivateMessageLogRepo.find({
        where: {
          userID: user.id!,
        },
        order: {
          id: 'DESC',
        },
        relations: ['user.rank', 'sentToUser', 'sentToUser.rank'],
      });
    return privateMessageLogs.map(AdminUserPrivateMessageLogDTO.fromEntity);
  }
}

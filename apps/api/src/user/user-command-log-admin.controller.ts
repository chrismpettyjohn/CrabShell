import { Controller, Get, Param } from '@nestjs/common';
import { UserPipe } from './user.pipe';
import { UserEntity } from '../database/user.entity';
import { HasScope } from '../auth/has-scope.decorator';
import { UserCommandLogEntity } from '../database/user-command-log.entity';
import { AdminUserChatlogDTO } from './user-command-log-admin.dto';
import { UserCommandLogRepository } from '../database/user-command-log.repository';

@Controller('admin/users')
export class UserCommandLogAdminController {
  constructor(private readonly userCommandLogRepo: UserCommandLogRepository) {}

  @Get('command-logs')
  @HasScope('manageUsers')
  async getCommandLogsForAllUsers(): Promise<AdminUserChatlogDTO[]> {
    const commandLogs: UserCommandLogEntity[] =
      await this.userCommandLogRepo.find({
        order: {
          id: 'DESC',
        },
        relations: ['user', 'user.rank'],
      });
    return commandLogs.map(AdminUserChatlogDTO.fromEntity);
  }

  @Get('/:userId/command-logs')
  @HasScope('manageUsers')
  async getCommandLogsByUserId(
    @Param('userId', UserPipe) user: UserEntity,
  ): Promise<AdminUserChatlogDTO[]> {
    const commandLogs: UserCommandLogEntity[] =
      await this.userCommandLogRepo.find({
        where: {
          userID: user.id!,
        },
        order: {
          id: 'DESC',
        },
        relations: ['user', 'user.rank'],
      });
    return commandLogs.map(AdminUserChatlogDTO.fromEntity);
  }
}

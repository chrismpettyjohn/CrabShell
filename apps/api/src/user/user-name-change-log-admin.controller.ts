import { Controller, Get, Param } from '@nestjs/common';
import { UserPipe } from './user.pipe';
import { UserEntity } from '../database/user.entity';
import { HasScope } from '../auth/has-scope.decorator';
import { UserNameChangeLogEntity } from '../database/user-name-change-log.entity';
import { AdminUserNameChangeLogDTO } from './user-name-change-log-admin.dto';
import { UserNameChangeLogRepository } from '../database/user-name-change-log.repository';

@Controller('admin/users')
export class UserNameChangeLogAdminController {
  constructor(
    private readonly userNameChangeLogRepo: UserNameChangeLogRepository,
  ) {}

  @Get('name-change-logs')
  @HasScope('manageUsers')
  async getNameChangeLogsForAllUsers(): Promise<AdminUserNameChangeLogDTO[]> {
    const nameChangeLogs: UserNameChangeLogEntity[] =
      await this.userNameChangeLogRepo.find({
        order: {
          id: 'DESC',
        },
        relations: ['user', 'user.rank'],
      });
    return nameChangeLogs.map(AdminUserNameChangeLogDTO.fromEntity);
  }

  @Get('/:userId/name-change-logs')
  @HasScope('manageUsers')
  async getNameChangeLogsByUserId(
    @Param('userId', UserPipe) user: UserEntity,
  ): Promise<AdminUserNameChangeLogDTO[]> {
    const nameChangeLogs: UserNameChangeLogEntity[] =
      await this.userNameChangeLogRepo.find({
        where: {
          userID: user.id!,
        },
        order: {
          id: 'DESC',
        },
        relations: ['user', 'user.rank'],
      });
    return nameChangeLogs.map(AdminUserNameChangeLogDTO.fromEntity);
  }
}

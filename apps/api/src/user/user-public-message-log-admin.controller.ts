import { Controller, Get, Param } from '@nestjs/common';
import { UserPipe } from './user.pipe';
import { UserEntity } from '../database/user.entity';
import { HasScope } from '../auth/has-scope.decorator';
import { UserPublicMessageLogEntity } from '../database/user-public-message-log.entity';
import { AdminUserPublicMessageLogDTO } from './user-public-message-log-admin.dto';
import { UserPublicMessageLogRepository } from '../database/user-public-message-log.repository';

@Controller('admin/users')
export class UserPublicMessageLogAdminController {
  constructor(
    private readonly userPublicMessageLogRepo: UserPublicMessageLogRepository,
  ) {}

  @Get('public-message-logs')
  @HasScope('manageUsers')
  async getPublicMessageLogsForAllUsers(): Promise<
    AdminUserPublicMessageLogDTO[]
  > {
    const publicMessageLogs: UserPublicMessageLogEntity[] =
      await this.userPublicMessageLogRepo.find({
        order: {
          id: 'DESC',
        },
        relations: ['user'],
      });
    return publicMessageLogs.map(AdminUserPublicMessageLogDTO.fromEntity);
  }

  @Get('/:userId/public-message-logs')
  @HasScope('manageUsers')
  async getPublicMessageLogsByUserId(
    @Param('userId', UserPipe) user: UserEntity,
  ): Promise<AdminUserPublicMessageLogDTO[]> {
    const publicMessageLogs: UserPublicMessageLogEntity[] =
      await this.userPublicMessageLogRepo.find({
        where: {
          userID: user.id!,
        },
        order: {
          id: 'DESC',
        },
        relations: ['user'],
      });
    return publicMessageLogs.map(AdminUserPublicMessageLogDTO.fromEntity);
  }
}

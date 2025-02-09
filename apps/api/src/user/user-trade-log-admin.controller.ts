import { Controller, Get, Param } from '@nestjs/common';
import { UserPipe } from './user.pipe';
import { UserEntity } from '../database/user.entity';
import { HasScope } from '../auth/has-scope.decorator';
import { UserTradeLogEntity } from '../database/user-trade-log.entity';
import { UserTradeLogRepository } from '../database/user-trade-log.repository';
import { AdminUserTradeLogDTO } from './user-trade-log-admin.dto';

@Controller('admin/users')
export class UserTradeLogAdminController {
  constructor(private readonly userTradeLogRepo: UserTradeLogRepository) {}

  @Get('trade-logs')
  @HasScope('manageUsers')
  async getTradeLogsForAllUsers(): Promise<AdminUserTradeLogDTO[]> {
    const tradeLogs: UserTradeLogEntity[] = await this.userTradeLogRepo.find({
      order: {
        id: 'DESC',
      },
      relations: ['userOne', 'userOne.rank', 'userTwo', 'userTwo.rank'],
    });
    return tradeLogs.map(AdminUserTradeLogDTO.fromEntity);
  }

  @Get('/:userId/trade-logs')
  @HasScope('manageUsers')
  async getTradeLogsByUserId(
    @Param('userId', UserPipe) user: UserEntity,
  ): Promise<AdminUserTradeLogDTO[]> {
    const tradeLogs: UserTradeLogEntity[] = await this.userTradeLogRepo.find({
      where: {
        userOneId: user.id!,
      },
      order: {
        id: 'DESC',
      },
      relations: ['userOne', 'userOne.rank', 'userTwo', 'userTwo.rank'],
    });
    return tradeLogs.map(AdminUserTradeLogDTO.fromEntity);
  }
}

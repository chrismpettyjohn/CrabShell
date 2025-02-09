import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { UserTradeLogEntity } from './user-trade-log.entity';

@Injectable()
export class UserTradeLogRepository extends BaseRepository<UserTradeLogEntity> {
  constructor(
    @InjectRepository(UserTradeLogEntity)
    userTradeLogRepository: Repository<UserTradeLogEntity>,
  ) {
    super(userTradeLogRepository);
  }
}

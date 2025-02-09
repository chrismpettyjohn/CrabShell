import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { UserPrivateMessageLogEntity } from './user-private-message-log.entity';

@Injectable()
export class UserPrivateMessageLogRepository extends BaseRepository<UserPrivateMessageLogEntity> {
  constructor(
    @InjectRepository(UserPrivateMessageLogEntity)
    userPrivateMessageLogRepository: Repository<UserPrivateMessageLogEntity>,
  ) {
    super(userPrivateMessageLogRepository);
  }
}

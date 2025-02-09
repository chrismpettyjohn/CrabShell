import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { UserPublicMessageLogEntity } from './user-public-message-log.entity';

@Injectable()
export class UserPublicMessageLogRepository extends BaseRepository<UserPublicMessageLogEntity> {
  constructor(
    @InjectRepository(UserPublicMessageLogEntity)
    userPublicMessageLogRepository: Repository<UserPublicMessageLogEntity>,
  ) {
    super(userPublicMessageLogRepository);
  }
}

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { UserCommandLogEntity } from './user-command-log.entity';

@Injectable()
export class UserCommandLogRepository extends BaseRepository<UserCommandLogEntity> {
  constructor(
    @InjectRepository(UserCommandLogEntity)
    userCommandLogRepository: Repository<UserCommandLogEntity>,
  ) {
    super(userCommandLogRepository);
  }
}

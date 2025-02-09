import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { UserNameChangeLogEntity } from './user-name-change-log.entity';

@Injectable()
export class UserNameChangeLogRepository extends BaseRepository<UserNameChangeLogEntity> {
  constructor(
    @InjectRepository(UserNameChangeLogEntity)
    userNameChangeLogRepository: Repository<UserNameChangeLogEntity>,
  ) {
    super(userNameChangeLogRepository);
  }
}

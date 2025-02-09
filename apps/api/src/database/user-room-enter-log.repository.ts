import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { UserRoomEnterLogEntity } from './user-room-enter-log.entity';

@Injectable()
export class UserRoomEnterLogRepository extends BaseRepository<UserRoomEnterLogEntity> {
  constructor(
    @InjectRepository(UserRoomEnterLogEntity)
    userRoomEnterLogRepository: Repository<UserRoomEnterLogEntity>,
  ) {
    super(userRoomEnterLogRepository);
  }
}

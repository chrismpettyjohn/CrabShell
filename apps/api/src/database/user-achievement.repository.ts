import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { UserAchievementEntity } from './user-achievement.entity';

@Injectable()
export class UserAchievementRepository extends BaseRepository<UserAchievementEntity> {
  constructor(
    @InjectRepository(UserAchievementEntity)
    userAchievementsRepo: Repository<UserAchievementEntity>,
  ) {
    super(userAchievementsRepo);
  }
}

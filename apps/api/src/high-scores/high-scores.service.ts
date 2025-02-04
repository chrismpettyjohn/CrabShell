import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/user.repository';
import {
  HighScoresByAchievementsRow,
  HighScoresByCreditsRow,
  HighScoresByDiamondsRow,
  HighScoresByOnlineTimeRow,
  HighScoresByRespectsReceivedRow,
} from '../../../../libs/public-client/src';
import { UserEntity } from '../database/user.entity';

@Injectable()
export class HighScoresService {
  constructor(private readonly userRepo: UserRepository) {}

  async byCredits(): Promise<HighScoresByCreditsRow[]> {
    const topUsers: UserEntity[] = await this.userRepo.find({
      order: {
        credits: 'DESC',
      },
      take: 20,
    });
    return topUsers.map((_) => ({
      id: _.id!,
      username: _.username,
      look: _.look,
      credits: _.credits,
    }));
  }

  async byDiamonds(): Promise<HighScoresByDiamondsRow[]> {
    const topUsers: UserEntity[] = await this.userRepo.find({
      order: {
        vipPoints: 'DESC',
      },
      take: 20,
    });
    return topUsers.map((_) => ({
      id: _.id!,
      username: _.username,
      look: _.look,
      diamonds: _.vipPoints,
    }));
  }

  async byOnlineTime(): Promise<HighScoresByOnlineTimeRow[]> {
    return this.userRepo.getInstance().query(`
        SELECT users.id AS id, users.username AS username, users.look AS look, users_settings.online_time AS onlineTime
        FROM users_settings
        JOIN users ON users.id = users_settings.user_id
        ORDER BY users_settings.online_time DESC
        LIMIT 20;
    `);
  }

  async byRespectReceived(): Promise<HighScoresByRespectsReceivedRow[]> {
    return this.userRepo.getInstance().query(`
        SELECT users.id AS id, users.username AS username, users.look AS look, users_settings.respects_received AS respectsReceived
        FROM users_settings
        JOIN users ON users.id = users_settings.user_id
        ORDER BY users_settings.respects_received DESC
        LIMIT 20;
    `);
  }

  async byAchievements(): Promise<HighScoresByAchievementsRow[]> {
    return this.userRepo.getInstance().query(`
        SELECT users.id AS id, users.username AS username, users.look AS look, COUNT(*) AS achievements
        FROM users_achievements
        JOIN achievements ON achievements.name = users_achievements.achievement_name
        JOIN users ON users.id = users_achievements.user_id
        WHERE users_achievements.progress >= achievements.progress_needed
        GROUP BY users.id, users.username, users.look
        ORDER BY achievements DESC
        LIMIT 20;
    `);
  }
}

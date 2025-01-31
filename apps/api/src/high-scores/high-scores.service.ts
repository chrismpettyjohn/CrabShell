import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/user.repository';
import {
  HighScoresByAchievementsRow,
  HighScoresByCreditsRow,
  HighScoresByDiamondsRow,
  HighScoresByOnlineTimeRow,
  HighScoresByRespectsReceivedRow,
} from '@crabshell/client';

@Injectable()
export class HighScoresService {
  constructor(private readonly userRepo: UserRepository) {}

  async byCredits(): Promise<HighScoresByCreditsRow[]> {
    return [];
  }

  async byDiamonds(): Promise<HighScoresByDiamondsRow[]> {
    return [];
  }

  async byOnlineTime(): Promise<HighScoresByOnlineTimeRow[]> {
    return [];
  }

  async byRespectReceived(): Promise<HighScoresByRespectsReceivedRow[]> {
    return [];
  }

  async byAchievements(): Promise<HighScoresByAchievementsRow[]> {
    return [];
  }
}

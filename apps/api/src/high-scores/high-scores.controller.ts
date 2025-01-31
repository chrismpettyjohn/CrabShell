import { Controller, Get } from '@nestjs/common';
import {
  HighScoresByAchievementsDTO,
  HighScoresByCreditsDTO,
  HighScoresByDiamondsDTO,
  HighScoresByOnlineTimeDTO,
  HighScoresByRespectsReceivedDTO,
} from './high-scores.dto';
import { HighScoresService } from './high-scores.service';

@Controller('high-scores')
export class HighScoresController {
  constructor(private readonly highScoresService: HighScoresService) {}

  @Get('credits')
  async byCredits(): Promise<HighScoresByCreditsDTO> {
    const items = await this.highScoresService.byCredits();
    return { items };
  }

  @Get('diamonds')
  async byDiamonds(): Promise<HighScoresByDiamondsDTO> {
    const items = await this.highScoresService.byDiamonds();
    return { items };
  }

  @Get('online-time')
  async byOnlineTime(): Promise<HighScoresByOnlineTimeDTO> {
    const items = await this.highScoresService.byOnlineTime();
    return { items };
  }

  @Get('respect-received')
  async byRespectReceived(): Promise<HighScoresByRespectsReceivedDTO> {
    const items = await this.highScoresService.byRespectReceived();
    return { items };
  }

  @Get('achievements')
  async byAchievements(): Promise<HighScoresByAchievementsDTO> {
    const items = await this.highScoresService.byAchievements();
    return { items };
  }
}

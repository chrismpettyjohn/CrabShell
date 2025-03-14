import {
  HighScoresByAchievementsResponse,
  HighScoresByAchievementsRow,
  HighScoresByCreditsResponse,
  HighScoresByCreditsRow,
  HighScoresByOnlineTimeResponse,
  HighScoresByOnlineTimeRow,
  HighScoresByRespectsReceivedResponse,
  HighScoresByRespectsReceivedRow,
} from '@crabshell/public-client';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class HighScoresByCreditsRowDTO implements HighScoresByCreditsRow {
  @IsNumber()
  id!: number;

  @IsString()
  username!: string;

  @IsString()
  look!: string;

  @IsNumber()
  credits!: number;
}

export class HighScoresByCreditsDTO implements HighScoresByCreditsResponse {
  @IsArray()
  items!: HighScoresByCreditsRowDTO[];
}

export class HighScoresByOnlineTimeRowDTO implements HighScoresByOnlineTimeRow {
  @IsNumber()
  id!: number;

  @IsString()
  username!: string;

  @IsString()
  look!: string;

  @IsNumber()
  onlineTime!: number;
}

export class HighScoresByOnlineTimeDTO
  implements HighScoresByOnlineTimeResponse
{
  @IsArray()
  items!: HighScoresByOnlineTimeRowDTO[];
}

export class HighScoresByRespectsReceivedRowDTO
  implements HighScoresByRespectsReceivedRow
{
  @IsNumber()
  id!: number;

  @IsString()
  username!: string;

  @IsString()
  look!: string;

  @IsNumber()
  respectsReceived!: number;
}

export class HighScoresByRespectsReceivedDTO
  implements HighScoresByRespectsReceivedResponse
{
  @IsArray()
  items!: HighScoresByRespectsReceivedRowDTO[];
}

export class HighScoresByAchievementsRowDTO
  implements HighScoresByAchievementsRow
{
  @IsNumber()
  id!: number;

  @IsString()
  username!: string;

  @IsString()
  look!: string;

  @IsNumber()
  achievements!: number;
}

export class HighScoresByAchievementsDTO
  implements HighScoresByAchievementsResponse
{
  @IsArray()
  items!: HighScoresByAchievementsRowDTO[];
}

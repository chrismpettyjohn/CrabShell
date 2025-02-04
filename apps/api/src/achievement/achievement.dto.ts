import { AchievementWire } from '../../../../libs/public-client/src';
import { IsString } from 'class-validator';

export class AchievementDTO implements AchievementWire {
  @IsString()
  name!: string;

  static fromName(name: string): AchievementDTO {
    const dto = new AchievementDTO();
    dto.name = name;
    return dto;
  }
}

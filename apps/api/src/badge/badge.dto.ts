import { BadgeWire } from '../../../../libs/public-client/src';
import { IsString } from 'class-validator';

export class BadgeDTO implements BadgeWire {
  @IsString()
  code!: string;

  static fromCode(code: string): BadgeDTO {
    const dto = new BadgeDTO();
    dto.code = code;
    return dto;
  }
}

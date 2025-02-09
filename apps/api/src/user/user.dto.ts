import { UserWire } from '@crabshell/public-client';
import { IsBoolean, IsInt, IsNumber, IsString } from 'class-validator';
import { UserEntity } from '../database/user.entity';

export class UserDTO implements UserWire {
  @IsInt()
  id!: number;

  @IsString()
  username!: string;

  @IsNumber()
  rankID!: number;

  @IsString()
  look: string;

  @IsString()
  motto: string;

  @IsBoolean()
  online: boolean;

  @IsNumber()
  credits: number;

  @IsNumber()
  pixels: number;

  @IsNumber()
  points: number;

  static fromEntity(entity: UserEntity): UserDTO {
    const dto = new UserDTO();
    dto.id = entity.id;
    dto.username = entity.username;
    dto.rankID = entity.rankID;
    dto.look = entity.look;
    dto.motto = entity.motto;
    dto.online = entity.onlineStatus === '1';
    dto.credits = entity.credits;
    dto.pixels = entity.activityPoints;
    dto.points = entity.vipPoints;
    return dto;
  }
}

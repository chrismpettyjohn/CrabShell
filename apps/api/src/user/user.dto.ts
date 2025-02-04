import { UserWire } from '@crabshell/public-client';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { UserEntity } from '../database/user.entity';

export class UserDTO implements UserWire {
  @IsInt()
  id!: number;

  @IsString()
  username!: string;

  @IsString()
  look: string;

  @IsString()
  motto: string;

  @IsBoolean()
  online: boolean;

  static fromEntity(entity: UserEntity): UserDTO {
    const dto = new UserDTO();
    dto.id = entity.id;
    dto.username = entity.username;
    dto.look = entity.look;
    dto.motto = entity.motto;
    dto.online = entity.onlineStatus === '1';
    return dto;
  }
}

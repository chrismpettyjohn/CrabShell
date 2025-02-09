import { IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../database/user.entity';
import {
  AdminUserUpdateByIdParams,
  AdminUserUpdateByUsernameParams,
  AdminUserWire,
} from '@crabshell/admin-client';
import { UserDTO } from './user.dto';
import { RankDTO } from '../rank/rank.dto';

export class AdminUserDTO extends UserDTO implements AdminUserWire {
  static fromEntity(entity: UserEntity): UserDTO {
    const dto = new AdminUserDTO();
    dto.id = entity.id;
    dto.username = entity.username;
    dto.rankID = entity.rankID;
    dto.look = entity.look;
    dto.motto = entity.motto;
    dto.online = entity.onlineStatus === '1';
    dto.rank = entity.rank ? RankDTO.fromEntity(entity.rank) : undefined
    return dto;
  }
}

export class UpdateUserByIdDTO implements AdminUserUpdateByIdParams {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  look?: string;
}
export class UpdateUserByUsernameDTO implements AdminUserUpdateByUsernameParams {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  look?: string;
}

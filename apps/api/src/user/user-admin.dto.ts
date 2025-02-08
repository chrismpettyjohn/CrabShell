import { IsNumber, IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../database/user.entity';
import {
  AdminUserUpdateByIdParams,
  AdminUserWire,
} from '@crabshell/admin-client';
import { UserDTO } from './user.dto';

export class AdminUserDTO extends UserDTO implements AdminUserWire {
  static fromEntity(entity: UserEntity): UserDTO {
    const dto = new AdminUserDTO();
    dto.id = entity.id;
    dto.username = entity.username;
    dto.rankID = entity.rankID;
    dto.look = entity.look;
    dto.motto = entity.motto;
    dto.online = entity.onlineStatus === '1';
    return dto;
  }
}

export class UpdateUserDTO implements AdminUserUpdateByIdParams {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  look?: string;
}

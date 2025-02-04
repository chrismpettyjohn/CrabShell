import { IsNumber, IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../database/user.entity';
import {
  AdminUserUpdateByIdParams,
  AdminUserWire,
} from '@crabshell/admin-client';
import { UserDTO } from './user.dto';

export class AdminUserDTO extends UserDTO implements AdminUserWire {
  @IsNumber()
  id!: number;

  @IsString()
  username!: string;

  @IsString()
  look!: string;

  static fromEntity(entity: UserEntity) {
    const dto = new UserDTO();
    dto.id = entity.id!;
    dto.username = entity.username;
    dto.look = entity.look;
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

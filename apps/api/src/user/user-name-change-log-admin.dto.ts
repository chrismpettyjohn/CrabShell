import { AdminUserNameChangeLogWire } from '@crabshell/admin-client';
import { UserNameChangeLogEntity } from '../database/user-name-change-log.entity';
import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './user.dto';

export class AdminUserNameChangeLogDTO implements AdminUserNameChangeLogWire {
  @IsNumber()
  userID: number;

  @IsString()
  oldName: string;

  @IsString()
  newName: string;

  @IsNumber()
  timestamp: number;

  @Type(() => UserDTO)
  user: UserDTO;

  static fromEntity(
    entity: UserNameChangeLogEntity,
  ): AdminUserNameChangeLogDTO {
    const dto = new AdminUserNameChangeLogDTO();
    dto.userID = entity.userID;
    dto.oldName = entity.oldName;
    dto.newName = entity.newName;
    dto.timestamp = entity.timestamp;
    dto.user = UserDTO.fromEntity(entity.user);
    return dto;
  }
}

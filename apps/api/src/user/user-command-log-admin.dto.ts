import { AdminUserCommandLogWire } from '@crabshell/admin-client';
import {
  UserChatlogResult,
  UserCommandLogEntity,
} from '../database/user-command-log.entity';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './user.dto';

export class AdminUserChatlogDTO implements AdminUserCommandLogWire {
  @IsNumber()
  userId: number;

  @IsNumber()
  timestamp: number;

  @IsString()
  command: string;

  @IsString()
  params: string;

  @IsEnum(UserChatlogResult)
  // @ts-ignore
  result: UserChatlogResult;

  @Type(() => UserDTO)
  user: UserDTO;

  static fromEntity(entity: UserCommandLogEntity): AdminUserChatlogDTO {
    const dto = new AdminUserChatlogDTO();
    dto.userId = entity.userID;
    dto.timestamp = entity.timestamp;
    dto.command = entity.command;
    dto.params = entity.params;
    dto.user = UserDTO.fromEntity(entity.user);
    return dto;
  }
}

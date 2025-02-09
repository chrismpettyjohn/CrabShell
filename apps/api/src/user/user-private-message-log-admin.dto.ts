import { AdminUserPrivateMessageLogWire } from '@crabshell/admin-client';
import { UserPrivateMessageLogEntity } from '../database/user-private-message-log.entity';
import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './user.dto';

export class AdminUserPrivateMessageLogDTO
  implements AdminUserPrivateMessageLogWire
{
  @IsNumber()
  id: number;

  @IsNumber()
  userID: number;

  @IsNumber()
  sentToUserID: number;

  @IsString()
  message: string;

  @IsNumber()
  timestamp: number;

  @Type(() => UserDTO)
  user: UserDTO;

  @Type(() => UserDTO)
  sentToUser: UserDTO;

  static fromEntity(
    entity: UserPrivateMessageLogEntity,
  ): AdminUserPrivateMessageLogDTO {
    const dto = new AdminUserPrivateMessageLogDTO();
    dto.id = entity.id;
    dto.userID = entity.userID;
    dto.sentToUserID = entity.sentToUserID;
    dto.message = entity.message;
    dto.timestamp = entity.timestamp;
    dto.user = UserDTO.fromEntity(entity.user);
    dto.sentToUser = UserDTO.fromEntity(entity.sentToUser);
    return dto;
  }
}

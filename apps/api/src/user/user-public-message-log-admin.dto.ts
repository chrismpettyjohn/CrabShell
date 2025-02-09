import { AdminUserPublicMessageLogWire } from '@crabshell/admin-client';
import { UserPublicMessageLogEntity } from '../database/user-public-message-log.entity';
import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './user.dto';

export class AdminUserPublicMessageLogDTO
  implements AdminUserPublicMessageLogWire
{
  @IsNumber()
  id: number;

  @IsNumber()
  roomID: number;

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
    entity: UserPublicMessageLogEntity,
  ): AdminUserPublicMessageLogDTO {
    const dto = new AdminUserPublicMessageLogDTO();
    dto.roomID = entity.roomID;
    dto.userID = entity.userID;
    dto.sentToUserID = entity.sentToUserID;
    dto.message = entity.message;
    dto.timestamp = entity.timestamp;
    dto.user = UserDTO.fromEntity(entity.user);
    dto.sentToUser = entity.sentToUser
      ? UserDTO.fromEntity(entity.sentToUser)
      : undefined;
    return dto;
  }
}

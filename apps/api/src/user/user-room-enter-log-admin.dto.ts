import { AdminUserRoomEnterLogWire } from '@crabshell/admin-client';
import { UserRoomEnterLogEntity } from '../database/user-room-enter-log.entity';
import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './user.dto';

export class AdminUserRoomEnterLogDTO implements AdminUserRoomEnterLogWire {
  @IsNumber()
  id: number;

  @IsNumber()
  roomID: number;

  @IsNumber()
  userID: number;

  @IsNumber()
  enteredAt: number;

  @IsNumber()
  leftAt: number;

  @Type(() => UserDTO)
  user: UserDTO;

  static fromEntity(entity: UserRoomEnterLogEntity): AdminUserRoomEnterLogDTO {
    const dto = new AdminUserRoomEnterLogDTO();
    dto.id = entity.id;
    dto.roomID = entity.roomID;
    dto.userID = entity.userID;
    dto.enteredAt = entity.enteredAt;
    dto.leftAt = entity.leftAt;
    dto.user = UserDTO.fromEntity(entity.user);
    return dto;
  }
}

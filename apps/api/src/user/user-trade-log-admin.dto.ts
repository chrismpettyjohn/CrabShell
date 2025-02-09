import { AdminUserTradeLogWire } from '@crabshell/admin-client';
import { UserTradeLogEntity } from '../database/user-trade-log.entity';
import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './user.dto';

export class AdminUserTradeLogDTO implements AdminUserTradeLogWire {
  @IsNumber()
  id: number;

  @IsNumber()
  userOneID: number;

  @IsString()
  userOneIpAddress: string;

  @IsNumber()
  userOneitemCount: number;

  @IsNumber()
  userTwoID: number;

  @IsString()
  userTwoIpAddress: string;

  @IsNumber()
  userTwoitemCount: number;

  @IsNumber()
  timestamp: number;

  @Type(() => UserDTO)
  userOne: UserDTO;

  @Type(() => UserDTO)
  userTwo: UserDTO;

  static fromEntity(entity: UserTradeLogEntity): AdminUserTradeLogDTO {
    const dto = new AdminUserTradeLogDTO();
    dto.id = entity.id;
    dto.userOneID = entity.userOneId;
    dto.userOneIpAddress = entity.userOneIpAddress;
    dto.userOneitemCount = entity.userOneItemCount;
    dto.userTwoID = entity.userTwoId;
    dto.userTwoIpAddress = entity.userTwoIpAddress;
    dto.userTwoitemCount = entity.userTwoItemCount;
    dto.timestamp = entity.timestamp;
    dto.userOne = UserDTO.fromEntity(entity.userOne);
    dto.userTwo = UserDTO.fromEntity(entity.userTwo);
    return dto;
  }
}

import {
  IsNumber,
  IsString,
  IsOptional,
  IsEnum,
  IsObject,
} from 'class-validator';
import { BanEntity } from '../database/ban.entity';
import {
  AdminBanCreateParams,
  AdminBanUpdateByIdParams,
  AdminBanWire,
} from '@crabshell/admin-client';
import { Type } from 'class-transformer';
import { UserDTO } from '../user/user.dto';

export class AdminBanDTO implements AdminBanWire {
  @IsNumber()
  id: number;

  @IsNumber()
  userId: number;

  @IsString()
  ip: string;

  @IsString()
  machineId: string;

  @IsNumber()
  userStaffId: number;

  @IsNumber()
  timestamp: number;

  @IsNumber()
  banExpire: number;

  @IsString()
  banReason: string;

  @IsEnum(['temporary', 'permanent'])
  type: 'temporary' | 'permanent';

  @IsNumber()
  cfhTopic: number;

  @IsObject()
  @IsOptional()
  @Type(() => UserDTO)
  user?: UserDTO;

  static fromEntity(entity: BanEntity) {
    const dto = new AdminBanDTO();
    dto.id = entity.id!;
    dto.userId = entity.userId;
    dto.ip = entity.ip;
    dto.machineId = entity.machineId;
    dto.userStaffId = entity.userStaffId;
    dto.timestamp = entity.timestamp;
    dto.banExpire = entity.banExpire;
    dto.banReason = entity.banReason;
    dto.type = entity.type;
    dto.cfhTopic = entity.cfhTopic;
    dto.user = entity.user ? UserDTO.fromEntity(entity.user) : undefined;
    return dto;
  }
}

export class CreateBanDTO implements AdminBanCreateParams {
  @IsNumber()
  userId: number;

  @IsString()
  ip: string;

  @IsString()
  machineId: string;

  @IsNumber()
  userStaffId: number;

  @IsNumber()
  timestamp: number;

  @IsNumber()
  banExpire: number;

  @IsString()
  banReason: string;

  @IsEnum(['temporary', 'permanent'])
  type: 'temporary' | 'permanent';

  @IsNumber()
  cfhTopic: number;
}

export class UpdateBanDTO implements AdminBanUpdateByIdParams {
  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsOptional()
  @IsString()
  ip?: string;

  @IsOptional()
  @IsString()
  machineId?: string;

  @IsOptional()
  @IsNumber()
  userStaffId?: number;

  @IsOptional()
  @IsNumber()
  timestamp?: number;

  @IsOptional()
  @IsNumber()
  banExpire?: number;

  @IsOptional()
  @IsString()
  banReason?: string;

  @IsOptional()
  @IsEnum(['temporary', 'permanent'])
  type?: 'temporary' | 'permanent';

  @IsOptional()
  @IsNumber()
  cfhTopic?: number;
}

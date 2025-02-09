import { IsNumber, IsOptional } from 'class-validator';
import { BanEntity } from '../database/ban.entity';
import {
  AdminBanCreateParams,
  AdminBanUpdateByIdParams,
  AdminBanWire,
} from '@crabshell/admin-client';

export class AdminBanDTO implements AdminBanWire {
  @IsNumber()
  id: number;

  @IsNumber()
  userId: number;

  static fromEntity(entity: BanEntity) {
    const dto = new AdminBanDTO();
    dto.id = entity.id!;
    dto.userId = entity.userId;
    return dto;
  }
}

export class CreateBanDTO implements AdminBanCreateParams {
  @IsNumber()
  userId: number;
}

export class UpdateBanDTO implements AdminBanUpdateByIdParams {
  @IsNumber()
  userId: number;
}

import { IsNumber, IsOptional, IsString } from 'class-validator';
import { RankEntity } from '../database/rank.entity';
import {
  AdminRankCreateParams,
  AdminRankUpdateByIdParams,
  AdminRankWire,
} from '@crabshell/admin-client';
import { RankDTO } from './rank.dto';

export class AdminRankDTO extends RankDTO implements AdminRankWire {
  @IsNumber()
  id!: number;

  @IsString()
  name!: string;

  @IsString()
  badgeCode!: string;

  static fromEntity(entity: RankEntity) {
    const dto = new RankDTO();
    dto.id = entity.id!;
    dto.name = entity.name;
    dto.badgeCode = entity.badgeCode;
    return dto;
  }
}

export class CreateRankDTO implements AdminRankCreateParams {
  @IsString()
  name!: string;

  @IsString()
  badgeCode!: string;
}

export class UpdateRankDTO implements AdminRankUpdateByIdParams {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  badgeCode?: string;
}

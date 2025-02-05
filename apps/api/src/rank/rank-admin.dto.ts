import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { RankEntity } from '../database/rank.entity';
import {
  AdminRankCreateParams,
  AdminRankUpdateByIdParams,
  AdminRankWire,
} from '@crabshell/admin-client';
import { RankDTO, RankScopesDTO } from './rank.dto';
import { Type } from 'class-transformer';
import { RankScope } from '@crabshell/public-client';

export class AdminRankDTO extends RankDTO implements AdminRankWire {
  @IsNumber()
  id!: number;

  @IsString()
  name!: string;

  @IsString()
  badgeCode!: string;

  @IsObject()
  @Type(() => RankScopesDTO)
  scopes: RankScopesDTO;

  static fromEntity(entity: RankEntity) {
    const dto = new RankDTO();
    dto.id = entity.id!;
    dto.name = entity.name;
    dto.badgeCode = entity.badgeCode;
    dto.scopes = RankScopesDTO.fromEntity(entity);
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

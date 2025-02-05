import { RankScope, RankWire } from '@crabshell/public-client';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { UserDTO } from '../user/user.dto';
import { RankEntity } from '../database/rank.entity';
import { Type } from 'class-transformer';

export class RankScopesDTO implements Record<RankScope, boolean> {
  @IsBoolean()
  accessAdminPanel!: boolean;

  @IsBoolean()
  manageArticles!: boolean;

  @IsBoolean()
  manageBadges!: boolean;

  @IsBoolean()
  manageEmu!: boolean;

  @IsBoolean()
  manageFurniture!: boolean;

  @IsBoolean()
  manageRanks!: boolean;

  @IsBoolean()
  manageLogs!: boolean;

  @IsBoolean()
  manageUsers!: boolean;

  static fromEntity(entity: RankEntity) {
    const dto = new RankScopesDTO();
    dto.accessAdminPanel = entity.accessAdminPanel === '1';
    dto.manageArticles = entity.manageArticles === '1';
    dto.manageBadges = entity.manageBadges === '1';
    dto.manageEmu = entity.manageEmu === '1';
    dto.manageFurniture = entity.manageFurniture === '1';
    dto.manageRanks = entity.manageRanks === '1';
    dto.manageLogs = entity.manageLogs === '1';
    dto.manageUsers = entity.manageUsers === '1';
    return dto;
  }
}

export class RankDTO implements RankWire {
  @IsNumber()
  id!: number;

  @IsString()
  name!: string;

  @IsString()
  badgeCode!: string;

  @IsArray()
  members!: UserDTO[];

  @IsObject()
  @Type(() => RankScopesDTO)
  scopes: RankScopesDTO;

  static fromEntity(entity: RankEntity) {
    const dto = new RankDTO();
    dto.id = entity.id!;
    dto.name = entity.name;
    dto.badgeCode = entity.badgeCode;
    dto.members = entity.members?.map(UserDTO.fromEntity);
    dto.scopes = RankScopesDTO.fromEntity(entity);
    return dto;
  }
}

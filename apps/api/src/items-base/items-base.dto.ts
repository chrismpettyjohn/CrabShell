import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';
import { ItemBaseEntity } from '../database/items-base.entity';
import {
  AdminItemsBaseCreateParams,
  AdminItemsBaseUpdateByIdParams,
  AdminItemsBaseWire,
} from '@crabshell/admin-client';

export class AdminItemsBaseDTO implements AdminItemsBaseWire {
  @IsNumber()
  id!: number;

  @IsNumber()
  spriteId!: number;

  @IsString()
  publicName!: string;

  @IsString()
  itemName!: string;

  @IsString()
  type!: string;

  @IsNumber()
  width!: number;

  @IsNumber()
  length!: number;

  @IsNumber()
  stackHeight!: number;

  @IsBoolean()
  allowStack!: boolean;

  @IsBoolean()
  allowSit!: boolean;

  @IsBoolean()
  allowLay!: boolean;

  @IsBoolean()
  allowWalk!: boolean;

  @IsBoolean()
  allowGift!: boolean;

  @IsBoolean()
  allowTrade!: boolean;

  @IsBoolean()
  allowRecycle!: boolean;

  @IsBoolean()
  allowMarketplaceSell!: boolean;

  @IsBoolean()
  allowInventoryStack!: boolean;

  @IsString()
  interactionType!: string;

  @IsNumber()
  interactionModesCount!: number;

  @IsString()
  vendingIds!: string;

  @IsString()
  multiheight!: string;

  @IsString()
  customParams!: string;

  @IsNumber()
  effectIdMale!: number;

  @IsNumber()
  effectIdFemale!: number;

  @IsString()
  clothingOnWalk!: string;

  static fromEntity(entity: ItemBaseEntity): AdminItemsBaseDTO {
    const dto = new AdminItemsBaseDTO();
    Object.assign(dto, entity);
    return dto;
  }
}

export class AdminCreateItemsBaseDTO implements AdminItemsBaseCreateParams {
  @IsNumber()
  spriteId!: number;

  @IsString()
  publicName!: string;

  @IsString()
  itemName!: string;

  @IsString()
  type!: string;

  @IsNumber()
  width!: number;

  @IsNumber()
  length!: number;

  @IsNumber()
  stackHeight!: number;

  @IsBoolean()
  allowStack!: boolean;

  @IsBoolean()
  allowSit!: boolean;

  @IsBoolean()
  allowLay!: boolean;

  @IsBoolean()
  allowWalk!: boolean;

  @IsBoolean()
  allowGift!: boolean;

  @IsBoolean()
  allowTrade!: boolean;

  @IsBoolean()
  allowRecycle!: boolean;

  @IsBoolean()
  allowMarketplaceSell!: boolean;

  @IsBoolean()
  allowInventoryStack!: boolean;

  @IsString()
  interactionType!: string;

  @IsNumber()
  interactionModesCount!: number;

  @IsString()
  vendingIds!: string;

  @IsString()
  multiheight!: string;

  @IsString()
  customParams!: string;

  @IsNumber()
  effectIdMale!: number;

  @IsNumber()
  effectIdFemale!: number;

  @IsString()
  clothingOnWalk!: string;
}

export class AdminUpdateItemsBaseDTO implements AdminItemsBaseUpdateByIdParams {
  @IsOptional()
  @IsNumber()
  spriteId?: number;

  @IsOptional()
  @IsString()
  publicName?: string;

  @IsOptional()
  @IsString()
  itemName?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  width?: number;

  @IsOptional()
  @IsNumber()
  length?: number;

  @IsOptional()
  @IsNumber()
  stackHeight?: number;

  @IsOptional()
  @IsBoolean()
  allowStack?: boolean;

  @IsOptional()
  @IsBoolean()
  allowSit?: boolean;

  @IsOptional()
  @IsBoolean()
  allowLay?: boolean;

  @IsOptional()
  @IsBoolean()
  allowWalk?: boolean;

  @IsOptional()
  @IsBoolean()
  allowGift?: boolean;

  @IsOptional()
  @IsBoolean()
  allowTrade?: boolean;

  @IsOptional()
  @IsBoolean()
  allowRecycle?: boolean;

  @IsOptional()
  @IsBoolean()
  allowMarketplaceSell?: boolean;

  @IsOptional()
  @IsBoolean()
  allowInventoryStack?: boolean;

  @IsOptional()
  @IsString()
  interactionType?: string;

  @IsOptional()
  @IsNumber()
  interactionModesCount?: number;

  @IsOptional()
  @IsString()
  vendingIds?: string;

  @IsOptional()
  @IsString()
  multiheight?: string;

  @IsOptional()
  @IsString()
  customParams?: string;

  @IsOptional()
  @IsNumber()
  effectIdMale?: number;

  @IsOptional()
  @IsNumber()
  effectIdFemale?: number;

  @IsOptional()
  @IsString()
  clothingOnWalk?: string;
}

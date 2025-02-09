import { AdminCatalogPageWire } from '@crabshell/admin-client';
import { IsInt, IsOptional, IsString, IsEnum } from 'class-validator';
import {
  CatalogPageEntity,
  CatalogVisibility,
} from '../database/catalog-page.entity';

export class CatalogPageDTO implements AdminCatalogPageWire {
  @IsInt()
  id!: number;

  @IsInt()
  @IsOptional()
  parentId?: number;

  @IsString()
  @IsOptional()
  captionSave?: string;

  @IsString()
  @IsOptional()
  publicName?: string;

  @IsString()
  @IsOptional()
  pageLayout?: string;

  @IsInt()
  @IsOptional()
  iconColor?: number;

  @IsInt()
  @IsOptional()
  iconImage?: number;

  @IsInt()
  @IsOptional()
  minRank?: number;

  @IsInt()
  @IsOptional()
  orderNum?: number;

  @IsEnum(CatalogVisibility)
  @IsOptional()
  visible?: CatalogVisibility;

  @IsEnum(CatalogVisibility)
  @IsOptional()
  enabled?: CatalogVisibility;

  @IsEnum(CatalogVisibility)
  @IsOptional()
  clubOnly?: CatalogVisibility;

  @IsEnum(CatalogVisibility)
  @IsOptional()
  vipOnly?: CatalogVisibility;

  @IsString()
  @IsOptional()
  pageHeadline?: string;

  @IsString()
  @IsOptional()
  pageTeaser?: string;

  @IsString()
  @IsOptional()
  pageSpecial?: string;

  @IsString()
  @IsOptional()
  pageText1?: string;

  @IsString()
  @IsOptional()
  pageText2?: string;

  @IsString()
  @IsOptional()
  pageTextDetails?: string;

  @IsString()
  @IsOptional()
  pageTextTeaser?: string;

  @IsInt()
  @IsOptional()
  roomId?: number;

  @IsString()
  @IsOptional()
  includes?: string;

  static fromEntity(entity: CatalogPageEntity): CatalogPageDTO {
    const dto = new CatalogPageDTO();
    dto.id = entity.id;
    dto.parentId = entity.parentId;
    dto.captionSave = entity.captionSave;
    dto.publicName = entity.publicName;
    dto.pageLayout = entity.pageLayout;
    dto.iconColor = entity.iconColor;
    dto.iconImage = entity.iconImage;
    dto.minRank = entity.minRank;
    dto.orderNum = entity.orderNum;
    dto.visible = entity.visible;
    dto.enabled = entity.enabled;
    dto.clubOnly = entity.clubOnly;
    dto.vipOnly = entity.vipOnly;
    dto.pageHeadline = entity.pageHeadline;
    dto.pageTeaser = entity.pageTeaser;
    dto.pageSpecial = entity.pageSpecial;
    dto.pageText1 = entity.pageText1;
    dto.pageText2 = entity.pageText2;
    dto.pageTextDetails = entity.pageTextDetails;
    dto.pageTextTeaser = entity.pageTextTeaser;
    dto.roomId = entity.roomId;
    dto.includes = entity.includes;
    return dto;
  }
}

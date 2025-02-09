import { AdminCatalogPageWire } from '@crabshell/admin-client';
import { IsInt, IsString } from 'class-validator';
import { CatalogPageEntity } from '../database/catalog-page.entity';

export class CatalogPageDTO implements AdminCatalogPageWire {
  @IsInt()
  id!: number;

  @IsString()
  publicName: string;

  static fromEntity(entity: CatalogPageEntity): CatalogPageDTO {
    const dto = new CatalogPageDTO();
    dto.id = entity.id;
    dto.publicName = entity.publicName;
    return dto;
  }
}

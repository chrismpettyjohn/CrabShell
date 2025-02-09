import { AdminCatalogItemWire } from '@crabshell/admin-client';
import { IsInt, IsString } from 'class-validator';
import { CatalogItemEntity } from '../database/catalog-item.entity';

export class AdminCatalogItemDTO implements AdminCatalogItemWire {
  @IsInt()
  id!: number;

  @IsString()
  publicName: string;

  static fromEntity(entity: CatalogItemEntity): AdminCatalogItemDTO {
    const dto = new AdminCatalogItemDTO();
    dto.id = entity.id;
    dto.publicName = entity.publicName;
    return dto;
  }
}

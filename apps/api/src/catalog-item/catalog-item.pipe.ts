import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { CatalogItemRepository } from '../database/catalog-item.repository';
import { CatalogItemEntity } from '../database/catalog-item.entity';

@Injectable()
export class CatalogItemPipe implements PipeTransform {
  constructor(private readonly catalogItemRepo: CatalogItemRepository) {}

  async transform(catalogItemID: number): Promise<CatalogItemEntity> {
    const catalogItem = await this.catalogItemRepo.findOne({
      where: {
        id: catalogItemID,
      },
    });

    if (!catalogItem) {
      throw new NotFoundException('Catalog ITem does not exist');
    }

    return catalogItem;
  }
}

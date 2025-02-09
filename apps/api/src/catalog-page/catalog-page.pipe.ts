import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { CatalogPageRepository } from '../database/catalog-page.repository';
import { CatalogPageEntity } from '../database/catalog-page.entity';

@Injectable()
export class CatalogPagePipe implements PipeTransform {
  constructor(private readonly catalogPageRepo: CatalogPageRepository) {}

  async transform(catalogPageID: number): Promise<CatalogPageEntity> {
    const catalogPage = await this.catalogPageRepo.findOne({
      where: {
        id: catalogPageID,
      },
    });

    if (!catalogPage) {
      throw new NotFoundException('Catalog Page does not exist');
    }

    return catalogPage;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CatalogItemEntity } from '../database/catalog-item.entity';
import { AdminCatalogItemDTO } from './catalog-item.dto';
import { HasScope } from '../auth/has-scope.decorator';
import { CatalogItemRepository } from '../database/catalog-item.repository';
import {
  AdminCatalogItemCreateResponse,
  AdminCatalogItemDeleteByIdResponse,
  AdminCatalogItemGetByIdResponse,
  AdminCatalogItemUpdateByIdResponse,
} from '@crabshell/admin-client';
import { CatalogItemPipe } from './catalog-item.pipe';

@Controller('admin/catalog-items')
export class CatalogItemAdminController {
  constructor(private readonly catalogItemRepo: CatalogItemRepository) {}

  @Post('')
  @HasScope('manageCatalog')
  create(
    @Param('catalogItemID', CatalogItemPipe) catalogItem: CatalogItemEntity,
  ): AdminCatalogItemCreateResponse {
    return AdminCatalogItemDTO.fromEntity(catalogItem);
  }

  @Get('')
  @HasScope('manageCatalog')
  async getAll(): Promise<AdminCatalogItemDTO[]> {
    const catalogItems: CatalogItemEntity[] = await this.catalogItemRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return catalogItems.map(AdminCatalogItemDTO.fromEntity);
  }

  @Get(':catalogItemID')
  @HasScope('manageCatalog')
  getById(
    @Param('catalogItemID', CatalogItemPipe) catalogItem: CatalogItemEntity,
  ): AdminCatalogItemGetByIdResponse {
    return AdminCatalogItemDTO.fromEntity(catalogItem);
  }

  @Patch(':catalogItemID')
  @HasScope('manageCatalog')
  async updateById(
    @Param('catalogItemID', CatalogItemPipe) catalogItem: CatalogItemEntity,
    @Body() catalogItemDto: AdminCatalogItemDTO,
  ): Promise<AdminCatalogItemUpdateByIdResponse> {
    await this.catalogItemRepo.update({ id: catalogItem.id }, {});
    return true;
  }

  @Delete(':catalogItemID')
  @HasScope('manageCatalog')
  async deleteById(
    @Param('catalogItemID', CatalogItemPipe) catalogItem: CatalogItemEntity,
  ): Promise<AdminCatalogItemDeleteByIdResponse> {
    await this.catalogItemRepo.delete({
      id: catalogItem.id,
    });
    return true;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CatalogPageEntity } from '../database/catalog-page.entity';
import { CatalogPageDTO } from './catalog-page.dto';
import { HasScope } from '../auth/has-scope.decorator';
import { CatalogPageRepository } from '../database/catalog-page.repository';
import {
  AdminCatalogPageCreateResponse,
  AdminCatalogPageDeleteByIdResponse,
  AdminCatalogPageGetByIdResponse,
  AdminCatalogPageUpdateByIdResponse,
} from '@crabshell/admin-client';
import { CatalogPagePipe } from './catalog-page.pipe';

@Controller('admin/catalog-pages')
export class CatalogPageAdminController {
  constructor(private readonly catalogPageRepo: CatalogPageRepository) {}

  @Post('')
  @HasScope('manageCatalog')
  create(
    @Param('catalogPageID', CatalogPagePipe) catalogPage: CatalogPageEntity,
  ): AdminCatalogPageCreateResponse {
    return CatalogPageDTO.fromEntity(catalogPage);
  }

  @Get('')
  @HasScope('manageCatalog')
  async getAll(): Promise<CatalogPageDTO[]> {
    const catalogPages: CatalogPageEntity[] = await this.catalogPageRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return catalogPages.map(CatalogPageDTO.fromEntity);
  }

  @Get(':catalogPageID')
  @HasScope('manageCatalog')
  getById(
    @Param('catalogPageID', CatalogPagePipe) catalogPage: CatalogPageEntity,
  ): AdminCatalogPageGetByIdResponse {
    return CatalogPageDTO.fromEntity(catalogPage);
  }

  @Patch(':catalogPageID')
  @HasScope('manageCatalog')
  async updateById(
    @Param('catalogPageID', CatalogPagePipe) catalogPage: CatalogPageEntity,
    @Body() catalogPageDto: CatalogPageDTO,
  ): Promise<AdminCatalogPageUpdateByIdResponse> {
    await this.catalogPageRepo.update({ id: catalogPage.id }, {});
    return true;
  }

  @Delete(':catalogPageID')
  @HasScope('manageCatalog')
  async deleteById(
    @Param('catalogPageID', CatalogPagePipe) catalogPage: CatalogPageEntity,
  ): Promise<AdminCatalogPageDeleteByIdResponse> {
    await this.catalogPageRepo.delete({
      id: catalogPage.id,
    });
    return true;
  }
}

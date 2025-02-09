import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { CatalogItemEntity } from './catalog-item.entity';

@Injectable()
export class CatalogItemRepository extends BaseRepository<CatalogItemEntity> {
  constructor(
    @InjectRepository(CatalogItemEntity)
    emuSettingsRepo: Repository<CatalogItemEntity>,
  ) {
    super(emuSettingsRepo);
  }
}

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { CatalogPageEntity } from './catalog-page.entity';

@Injectable()
export class CatalogPageRepository extends BaseRepository<CatalogPageEntity> {
  constructor(
    @InjectRepository(CatalogPageEntity)
    emuSettingsRepo: Repository<CatalogPageEntity>,
  ) {
    super(emuSettingsRepo);
  }
}

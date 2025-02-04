import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { ItemBaseEntity } from './items-base.entity';

@Injectable()
export class ItemBaseRepository extends BaseRepository<ItemBaseEntity> {
  constructor(
    @InjectRepository(ItemBaseEntity) itemBaseRepo: Repository<ItemBaseEntity>,
  ) {
    super(itemBaseRepo);
  }
}

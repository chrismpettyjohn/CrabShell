import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { ItemBaseRepository } from '../database/items-base.repository';
import { ItemBaseEntity } from '../database/items-base.entity';

@Injectable()
export class ItemsBasePipe implements PipeTransform {
  constructor(private readonly itemsBaseRepo: ItemBaseRepository) {}

  async transform(itemsBaseID: number): Promise<ItemBaseEntity> {
    const itemsBase = await this.itemsBaseRepo.findOne({
      where: {
        id: itemsBaseID,
      },
    });

    if (!itemsBase) {
      throw new NotFoundException('item not found in items_base');
    }

    return itemsBase;
  }
}

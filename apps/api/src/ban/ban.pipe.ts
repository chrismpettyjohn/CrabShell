import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { BanEntity } from '../database/ban.entity';
import { BanRepository } from '../database/ban.repository';

@Injectable()
export class BanPipe implements PipeTransform {
  constructor(private readonly banRepo: BanRepository) {}

  async transform(banId: number): Promise<BanEntity> {
    const ban = await this.banRepo.findOne({
      where: {
        id: banId,
      },
    });

    if (!ban) {
      throw new NotFoundException('Ban does not exist');
    }

    return ban;
  }
}

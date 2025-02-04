import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { RankEntity } from '../database/rank.entity';
import { RankRepository } from '../database/rank.repository';

@Injectable()
export class RankPipe implements PipeTransform {
  constructor(private readonly rankRepo: RankRepository) {}

  async transform(rankId: number): Promise<RankEntity> {
    const rank = await this.rankRepo.findOne({
      where: {
        id: rankId,
      },
    });

    if (!rank) {
      throw new NotFoundException('Rank does not exist');
    }

    return rank;
  }
}

import { Injectable } from '@nestjs/common';
import { RankDTO } from './rank.dto';
import { RankRepository } from '../database/rank.repository';
import { RankBoolean } from '../database/rank.entity';

@Injectable()
export class RankService {
  constructor(private readonly rankRepo: RankRepository) {}

  async getStaff(): Promise<RankDTO[]> {
    const ranks = await this.rankRepo.find({
      where: {
        showStaff: RankBoolean.True,
      },
      relations: ['members', 'members.rank'],
    });
    return ranks as any;
  }
}

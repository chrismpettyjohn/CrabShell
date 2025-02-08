import { Injectable } from '@nestjs/common';
import { RankDTO } from './rank.dto';
import { RankRepository } from '../database/rank.repository';
import { UserDTO } from '../user/user.dto';
import { RankBoolean } from '../database/rank.entity';

@Injectable()
export class RankService {
  constructor(private readonly rankRepo: RankRepository) {}

  async getStaff(): Promise<RankDTO[]> {
    const ranks = await this.rankRepo.find({
      where: {
        showStaff: RankBoolean.True,
      },
      relations: ['members'],
    });
    return ranks as any;
  }
}

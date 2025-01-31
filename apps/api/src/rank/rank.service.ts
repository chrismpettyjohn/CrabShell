import { Injectable } from '@nestjs/common';
import { RankDTO } from './rank.dto';
import { RankRepository } from '../database/rank.repository';
import { UserDTO } from '../user/user.dto';

@Injectable()
export class RankService {
  constructor(private readonly rankRepo: RankRepository) {}

  async getStaff(): Promise<RankDTO[]> {
    const ranks = await this.rankRepo.find({
      where: {
        showStaff: '1',
      },
      relations: ['members'],
    });
    console.log(ranks);
    return ranks as any;
  }
}

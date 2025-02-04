import { Controller, Get } from '@nestjs/common';
import { RankDTO } from './rank.dto';
import { RankService } from './rank.service';
import { RankRepository } from '../database/rank.repository';

@Controller('ranks')
export class RankController {
  constructor(private readonly rankRepo: RankRepository) {}

  @Get('staff')
  async getStaff(): Promise<RankDTO[]> {
    const ranks = await this.rankRepo.find({
      order: {
        id: 'DESC',
      },
      relations: ['members'],
    });
    return ranks.map(RankDTO.fromEntity);
  }
}

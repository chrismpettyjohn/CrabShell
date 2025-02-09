import { Controller, Get, Param } from '@nestjs/common';
import { RankDTO } from './rank.dto';
import { RankService } from './rank.service';
import { RankRepository } from '../database/rank.repository';
import { RankPipe } from './rank.pipe';
import { RankEntity } from '../database/rank.entity';

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
  @Get(':rankId')
  getById(@Param('rankId', RankPipe) rank: RankEntity): RankDTO {
    return RankDTO.fromEntity(rank);
  }
}

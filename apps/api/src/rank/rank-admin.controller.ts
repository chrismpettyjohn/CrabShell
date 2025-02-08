import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RankEntity } from '../database/rank.entity';
import { RankDTO } from './rank.dto';
import { HasScope } from '../auth/has-scope.decorator';
import { RankRepository } from '../database/rank.repository';
import {
  AdminRankCreateResponse,
  AdminRankDeleteByIdResponse,
  AdminRankGetByIdResponse,
  AdminRankUpdateByIdResponse,
} from '@crabshell/admin-client';
import { RankPipe } from './rank.pipe';

@Controller('admin/ranks')
export class RankAdminController {
  constructor(private readonly rankRepo: RankRepository) {}

  @Post('')
  @HasScope('manageRanks')
  create(@Param('rankID', RankPipe) rank: RankEntity): AdminRankCreateResponse {
    return RankDTO.fromEntity(rank);
  }

  @Get('')
  @HasScope('manageRanks')
  async getAll(): Promise<RankDTO[]> {
    const ranks: RankEntity[] = await this.rankRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return ranks.map(RankDTO.fromEntity);
  }

  @Get(':rankID')
  @HasScope('manageRanks')
  getById(
    @Param('rankID', RankPipe) rank: RankEntity,
  ): AdminRankGetByIdResponse {
    return RankDTO.fromEntity(rank);
  }

  @Patch(':rankID')
  @HasScope('manageRanks')
  async updateById(
    @Param('rankID', RankPipe) rank: RankEntity,
    @Body() rankDto: RankDTO,
  ): Promise<AdminRankUpdateByIdResponse> {
    await this.rankRepo.update(
      { id: rank.id },
      { name: rankDto?.name, badgeCode: rankDto?.badgeCode },
    );
    return true;
  }

  @Delete(':rankID')
  @HasScope('manageRanks')
  async deleteById(
    @Param('rankID', RankPipe) rank: RankEntity,
  ): Promise<AdminRankDeleteByIdResponse> {
    await this.rankRepo.delete({
      id: rank.id,
    });
    return true;
  }
}

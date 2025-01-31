import { Controller, Get } from '@nestjs/common';
import { RankDTO } from './rank.dto';
import { RankService } from './rank.service';

@Controller('ranks')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('staff')
  getStaff(): Promise<RankDTO[]> {
    return this.rankService.getStaff();
  }
}

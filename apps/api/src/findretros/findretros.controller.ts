import { Controller, Get, UseGuards } from '@nestjs/common';
import { SessionGuard } from '../auth/session.guard';
import { FindRetrosService } from './findretros.service';
import { IpAddress } from '../auth/ip-address.decorator';
import { FindRetrosVoteStatusResponse } from '@crabshell/public-client';

@Controller('findretros')
export class FindRetrosController {
  constructor(private readonly findRetrosService: FindRetrosService) {}

  @Get('status')
  @UseGuards(SessionGuard)
  async didUserVote(
    @IpAddress() ipAddress: string,
  ): Promise<FindRetrosVoteStatusResponse> {
    console.log({ ipAddress });
    const success = await this.findRetrosService.validateVote(ipAddress);
    const href = this.findRetrosService.getVoteUrl(true, true);
    return { success, href };
  }
}

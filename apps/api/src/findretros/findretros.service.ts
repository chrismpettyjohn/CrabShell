import { Injectable, Logger } from '@nestjs/common';
import { FIND_RETROS_SERVER_NAME } from '../app.const';

const USER_VOTED_IN_LAST_TWENTY_FOUR_HOURS = 2;

@Injectable()
export class FindRetrosService {
  private readonly logger = new Logger(FindRetrosService.name, {
    timestamp: true,
  });

  async validateVote(clientIp: string): Promise<boolean> {
    try {
      this.logger.log(`Checking if ip ${clientIp} voted in last 24hr`);
      const url = `https://findretros.com/legacy/validate?user=${FIND_RETROS_SERVER_NAME}&ip=${clientIp}`;
      const response = await fetch(url);
      const data = await response.text();
      const didVote =
        parseInt(data, 10) === USER_VOTED_IN_LAST_TWENTY_FOUR_HOURS;
      this.logger.log(
        `IP ${clientIp} ${didVote ? 'did vote' : 'did not vote'} recently`,
      );
      return didVote;
    } catch (e: any) {
      this.logger.error(`Failed to check if ip ${clientIp} voted due to ${e}`);
      throw e;
    }
  }

  getVoteUrl(
    minimal: boolean = false,
    returnAfterVote: boolean = false,
  ): string {
    let url = `https://findretros.com/servers/${FIND_RETROS_SERVER_NAME}/vote`;
    const params = [];

    if (minimal) params.push('minimal=1');
    if (returnAfterVote) params.push('return=1');

    return params.length ? `${url}?${params.join('&')}` : url;
  }
}

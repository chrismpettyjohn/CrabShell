import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { AdminBadgeWire } from '@crabshell/admin-client';

@Injectable()
export class BadgePipe implements PipeTransform {
  constructor(private readonly badgeService: BadgeService) {}

  async transform(badgeCode: string): Promise<AdminBadgeWire> {
    const badge = await this.badgeService.getByCode(badgeCode);

    if (!badge) {
      throw new NotFoundException('Badge does not exist');
    }

    return badge;
  }
}

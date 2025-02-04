import { AdminBadgeWire } from '@crabshell/admin-client';
import { Injectable } from '@nestjs/common';
import { AdminBadgeUpdateByCodeDTO } from './badge.dto';

@Injectable()
export class BadgeService {
  async create(code: string, publicName: string): Promise<AdminBadgeWire> {
    throw new Error('not supported');
  }
  async getAll(): Promise<AdminBadgeWire[]> {
    return [];
  }

  async getByCode(badgeCode: string): Promise<AdminBadgeWire> {
    return {
      code: '',
      publicName: '',
    };
  }

  async updateByCode(badgeCode: string, dto: AdminBadgeUpdateByCodeDTO) {
    throw new Error('not supported');
  }

  async deleteByCode(badgeCode: string) {
    throw new Error('not supported');
  }
}

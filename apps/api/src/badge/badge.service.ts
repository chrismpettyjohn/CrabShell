import { AdminBadgeWire } from '@crabshell/admin-client';
import { Injectable } from '@nestjs/common';
import { AdminBadgeUpdateByCodeDTO } from './badge.dto';
import { BADGES_FOLDER } from '../app.const';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BadgeService {
  private badges: AdminBadgeWire[] = [];

  constructor() {
    this.loadBadges();
  }

  private loadBadges() {
    console.log(`Loading files from ${BADGES_FOLDER}`);
    if (!fs.existsSync(BADGES_FOLDER)) {
      fs.mkdirSync(BADGES_FOLDER, { recursive: true });
    }
    const files = fs.readdirSync(BADGES_FOLDER);
    this.badges = files.map((file) => {
      const filePath = path.join(BADGES_FOLDER, file);
      return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as AdminBadgeWire;
    });
  }

  private saveBadge(badge: AdminBadgeWire) {
    const filePath = path.join(BADGES_FOLDER, `${badge.code}.json`);
    fs.writeFileSync(filePath, JSON.stringify(badge, null, 2));
  }

  async create(code: string, publicName: string): Promise<AdminBadgeWire> {
    const existingBadge = this.badges.find((badge) => badge.code === code);
    if (existingBadge) throw new Error('Badge already exists');

    const newBadge: AdminBadgeWire = { code, publicName };
    this.badges.push(newBadge);
    this.saveBadge(newBadge);
    return newBadge;
  }

  async getAll(): Promise<AdminBadgeWire[]> {
    return this.badges;
  }

  async getByCode(badgeCode: string): Promise<AdminBadgeWire> {
    const badge = this.badges.find((b) => b.code === badgeCode);
    if (!badge) throw new Error('Badge not found');
    return badge;
  }

  async updateByCode(badgeCode: string, dto: AdminBadgeUpdateByCodeDTO) {
    const badge = this.badges.find((b) => b.code === badgeCode);
    if (!badge) throw new Error('Badge not found');

    Object.assign(badge, dto);
    this.saveBadge(badge);
    return badge;
  }

  async deleteByCode(badgeCode: string) {
    const index = this.badges.findIndex((b) => b.code === badgeCode);
    if (index === -1) throw new Error('Badge not found');

    this.badges.splice(index, 1);
    const filePath = path.join(BADGES_FOLDER, `${badgeCode}.json`);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
}

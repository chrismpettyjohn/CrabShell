import { IsOptional, IsString } from 'class-validator';
import {
  AdminBadgeCreateParams,
  AdminBadgeUpdateByCodeParams,
  AdminBadgeWire,
} from '@crabshell/admin-client';
import { BadgeWire } from '@crabshell/public-client';

export class BadgeDTO implements BadgeWire {
  @IsString()
  code!: string;

  static fromCode(code: string) {
    const dto = new AdminBadgeDTO();
    dto.code = code;
    return dto;
  }
}

export class AdminBadgeDTO implements AdminBadgeWire {
  @IsString()
  code!: string;

  @IsString()
  publicName!: string;

  static create(code: string, publicName: string) {
    const dto = new AdminBadgeDTO();
    dto.code = code;
    dto.publicName = publicName;
    return dto;
  }
}

export class AdminBadgeCreateDTO implements AdminBadgeCreateParams {
  @IsString()
  code!: string;

  @IsString()
  publicName!: string;
}

export class AdminBadgeUpdateByCodeDTO implements AdminBadgeUpdateByCodeParams {
  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  publicName?: string;
}

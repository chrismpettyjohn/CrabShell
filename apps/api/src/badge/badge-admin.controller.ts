import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HasScope } from '../auth/has-scope.decorator';
import {
  AdminBadgeCreateResponse,
  AdminBadgeDeleteByCodeResponse,
  AdminBadgeGetAllResponse,
  AdminBadgeGetByCodeResponse,
  AdminBadgeUpdateByCodeResponse,
  AdminBadgeWire,
} from '@crabshell/admin-client';
import { GetSession } from '../auth/get-session.decorator';
import { UserEntity } from '../database/user.entity';
import { AdminBadgeCreateDTO, AdminBadgeUpdateByCodeDTO } from './badge.dto';
import { BadgeService } from './badge.service';
import { BadgePipe } from './badge.pipe';

@Controller('admin/badges')
@HasScope('manageBadges')
export class BadgeAdminController {
  constructor(private readonly badgeService: BadgeService) {}

  @Post('')
  create(
    @Body() dto: AdminBadgeCreateDTO,
    @GetSession() user: UserEntity,
  ): Promise<AdminBadgeCreateResponse> {
    return this.badgeService.create(dto.code, dto.publicName);
  }

  @Get('')
  getAll(): Promise<AdminBadgeGetAllResponse> {
    return this.badgeService.getAll();
  }

  @Get(':badgeCode')
  getByCode(
    @Param('badgeCode', BadgePipe) badge: AdminBadgeWire,
  ): AdminBadgeGetByCodeResponse {
    return badge;
  }

  @Patch(':badgeCode')
  async updateByCode(
    @Param('badgeCode', BadgePipe) badge: AdminBadgeWire,
    @Body() badgeDto: AdminBadgeUpdateByCodeDTO,
  ): Promise<AdminBadgeUpdateByCodeResponse> {
    await this.badgeService.updateByCode(badge.code, badgeDto);
    return true;
  }

  @Delete(':badgeCode')
  async deleteByCode(
    @Param('badgeCode', BadgePipe) badge: AdminBadgeWire,
  ): Promise<AdminBadgeDeleteByCodeResponse> {
    await this.badgeService.deleteByCode(badge.code);
    return true;
  }
}

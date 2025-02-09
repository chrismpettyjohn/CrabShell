import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BanEntity } from '../database/ban.entity';
import { AdminBanDTO } from './ban.dto';
import { HasScope } from '../auth/has-scope.decorator';
import { BanRepository } from '../database/ban.repository';
import {
  AdminBanCreateResponse,
  AdminBanDeleteByIdResponse,
  AdminBanGetByIdResponse,
  AdminBanUpdateByIdResponse,
} from '@crabshell/admin-client';
import { BanPipe } from './ban.pipe';

@Controller('admin/bans')
export class BanAdminController {
  constructor(private readonly banRepo: BanRepository) {}

  @Post('')
  @HasScope('manageBans')
  create(@Param('banID', BanPipe) ban: BanEntity): AdminBanCreateResponse {
    return AdminBanDTO.fromEntity(ban);
  }

  @Get('')
  @HasScope('manageBans')
  async getAll(): Promise<AdminBanDTO[]> {
    const bans: BanEntity[] = await this.banRepo.find({
      order: {
        id: 'DESC',
      },
      relations: ['user'],
    });
    return bans.map(AdminBanDTO.fromEntity);
  }

  @Get(':banID')
  @HasScope('manageBans')
  getById(@Param('banID', BanPipe) ban: BanEntity): AdminBanGetByIdResponse {
    return AdminBanDTO.fromEntity(ban);
  }

  @Patch(':banID')
  @HasScope('manageBans')
  async updateById(
    @Param('banID', BanPipe) ban: BanEntity,
    @Body() banDto: AdminBanDTO,
  ): Promise<AdminBanUpdateByIdResponse> {
    await this.banRepo.update({ id: ban.id }, { userId: banDto?.userId });
    return true;
  }

  @Delete(':banID')
  @HasScope('manageBans')
  async deleteById(
    @Param('banID', BanPipe) ban: BanEntity,
  ): Promise<AdminBanDeleteByIdResponse> {
    await this.banRepo.delete({
      id: ban.id,
    });
    return true;
  }
}

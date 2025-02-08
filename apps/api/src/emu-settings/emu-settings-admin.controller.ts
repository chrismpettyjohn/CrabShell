import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EmuSettingsEntity } from '../database/emu-settings.entity';
import {
  AdminEmuSettingsCreateResponse,
  AdminEmuSettingsDeleteByIdResponse,
  AdminEmuSettingsGetAllResponse,
  AdminEmuSettingsGetByIdResponse,
  AdminEmuSettingsUpdateByIdResponse,
} from '@crabshell/admin-client';
import { EmuSettingsRepository } from '../database/emu-settings.repository';
import { EmuSettingsPipe } from './emu-settings.pipe';
import { AdminEmuSettingsDTO } from './emu-settings.dto';
import { HasScope } from '../auth/has-scope.decorator';

@Controller('admin/emu-settings')
export class EmuSettingsAdminController {
  constructor(private readonly emuSettingsRepo: EmuSettingsRepository) {}

  @Post('')
  @HasScope('manageEmu')
  create(
    @Param('key', EmuSettingsPipe) emuSetting: EmuSettingsEntity,
  ): AdminEmuSettingsCreateResponse {
    return AdminEmuSettingsDTO.fromEntity(emuSetting);
  }

  @Get('')
  @HasScope('manageEmu')
  async getAll(): Promise<AdminEmuSettingsGetAllResponse> {
    const emuSettings: EmuSettingsEntity[] = await this.emuSettingsRepo.find({
      order: {
        key: 'DESC',
      },
    });
    return emuSettings.map(AdminEmuSettingsDTO.fromEntity);
  }

  @Get(':emuSettingID')
  @HasScope('manageEmu')
  getById(
    @Param('emuSettingID', EmuSettingsPipe) emuSetting: EmuSettingsEntity,
  ): AdminEmuSettingsGetByIdResponse {
    return AdminEmuSettingsDTO.fromEntity(emuSetting);
  }

  @Patch(':emuSettingID')
  @HasScope('manageEmu')
  async updateById(
    @Param('emuSettingID', EmuSettingsPipe) emuSetting: EmuSettingsEntity,
    @Body() emuSettingDto: AdminEmuSettingsDTO,
  ): Promise<AdminEmuSettingsUpdateByIdResponse> {
    await this.emuSettingsRepo.update({ key: emuSetting.key }, emuSettingDto);
    return true;
  }

  @Delete(':emuSettingID')
  @HasScope('manageEmu')
  async deleteById(
    @Param('emuSettingID', EmuSettingsPipe) emuSetting: EmuSettingsEntity,
  ): Promise<AdminEmuSettingsDeleteByIdResponse> {
    await this.emuSettingsRepo.delete({
      key: emuSetting.key,
    });
    return true;
  }
}

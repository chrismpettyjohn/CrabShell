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
  AdminEmuSettingsDeleteByKeyResponse,
  AdminEmuSettingsGetAllResponse,
  AdminEmuSettingsGetByKeyResponse,
  AdminEmuSettingsUpdateByKeyResponse,
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
  getByKey(
    @Param('emuSettingID', EmuSettingsPipe) emuSetting: EmuSettingsEntity,
  ): AdminEmuSettingsGetByKeyResponse {
    return AdminEmuSettingsDTO.fromEntity(emuSetting);
  }

  @Patch(':emuSettingID')
  @HasScope('manageEmu')
  async updateByKey(
    @Param('emuSettingID', EmuSettingsPipe) emuSetting: EmuSettingsEntity,
    @Body() emuSettingDto: AdminEmuSettingsDTO,
  ): Promise<AdminEmuSettingsUpdateByKeyResponse> {
    await this.emuSettingsRepo.update({ key: emuSetting.key }, emuSettingDto);
    return true;
  }

  @Delete(':emuSettingID')
  @HasScope('manageEmu')
  async deleteByKey(
    @Param('emuSettingID', EmuSettingsPipe) emuSetting: EmuSettingsEntity,
  ): Promise<AdminEmuSettingsDeleteByKeyResponse> {
    await this.emuSettingsRepo.delete({
      key: emuSetting.key,
    });
    return true;
  }
}

import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { EmuSettingsRepository } from '../database/emu-settings.repository';
import { EmuSettingsEntity } from '../database/emu-settings.entity';

@Injectable()
export class EmuSettingsPipe implements PipeTransform {
  constructor(private readonly emuSettingsRepo: EmuSettingsRepository) {}

  async transform(emuSettingsKey: string): Promise<EmuSettingsEntity> {
    const row = await this.emuSettingsRepo.findOne({
      where: {
        key: emuSettingsKey,
      },
    });

    if (!row) {
      throw new NotFoundException('emulator settings record does not exist');
    }

    return row;
  }
}

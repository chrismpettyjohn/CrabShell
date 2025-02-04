import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { EmuTextsEntity } from '../database/emu-texts.entity';
import { EmuTextsRepository } from '../database/emu-texts.repository';

@Injectable()
export class EmuTextsPipe implements PipeTransform {
  constructor(private readonly emuSettingsRepo: EmuTextsRepository) {}

  async transform(emuTextsKey: string): Promise<EmuTextsEntity> {
    const row = await this.emuSettingsRepo.findOne({
      where: {
        key: emuTextsKey,
      },
    });

    if (!row) {
      throw new NotFoundException('emulator texts record does not exist');
    }

    return row;
  }
}

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { EmuSettingsEntity } from './emu-settings.entity';

@Injectable()
export class EmuSettingsRepository extends BaseRepository<EmuSettingsEntity> {
  constructor(
    @InjectRepository(EmuSettingsEntity)
    emuSettingsRepo: Repository<EmuSettingsEntity>,
  ) {
    super(emuSettingsRepo);
  }
}

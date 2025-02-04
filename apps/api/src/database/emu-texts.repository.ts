import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { EmuTextsEntity } from './emu-texts.entity';

@Injectable()
export class EmuTextsRepository extends BaseRepository<EmuTextsEntity> {
  constructor(
    @InjectRepository(EmuTextsEntity) emuTextsRepo: Repository<EmuTextsEntity>,
  ) {
    super(emuTextsRepo);
  }
}

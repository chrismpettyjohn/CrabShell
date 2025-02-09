import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { EmuTextsEntity } from './emu-texts.entity';
import { BanEntity } from './ban.entity';

@Injectable()
export class BanRepository extends BaseRepository<BanEntity> {
  constructor(@InjectRepository(BanEntity) banRepo: Repository<BanEntity>) {
    super(banRepo);
  }
}

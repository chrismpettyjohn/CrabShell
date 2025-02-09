import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { EventEntity } from './event.entity';

@Injectable()
export class EventRepository extends BaseRepository<EventEntity> {
  constructor(
    @InjectRepository(EventEntity) eventRepo: Repository<EventEntity>,
  ) {
    super(eventRepo);
  }
}

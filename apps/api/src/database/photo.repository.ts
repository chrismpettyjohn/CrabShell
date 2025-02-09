import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { PhotoEntity } from './photo.entity';

@Injectable()
export class PhotoRepository extends BaseRepository<PhotoEntity> {
  constructor(
    @InjectRepository(PhotoEntity) photoRepo: Repository<PhotoEntity>,
  ) {
    super(photoRepo);
  }
}

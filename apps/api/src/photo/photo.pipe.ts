import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { PhotoEntity } from '../database/photo.entity';
import { PhotoRepository } from '../database/photo.repository';

@Injectable()
export class PhotoPipe implements PipeTransform {
  constructor(private readonly photoRepo: PhotoRepository) {}

  async transform(photoId: number): Promise<PhotoEntity> {
    const photo = await this.photoRepo.findOne({
      where: {
        id: photoId,
      },
      relations: ['user', 'user.rank'],
    });

    if (!photo) {
      throw new NotFoundException('Photo does not exist');
    }

    return photo;
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { PhotoPipe } from './photo.pipe';
import { PhotoEntity } from '../database/photo.entity';
import { PhotoDTO } from './photo.dto';
import { PhotoRepository } from '../database/photo.repository';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoRepo: PhotoRepository) {}

  @Get('')
  async getAll(): Promise<PhotoDTO[]> {
    const photos: PhotoEntity[] = await this.photoRepo.find({
      order: {
        id: 'DESC',
      },
      relations: ['user', 'user.rank'],
    });
    return photos.map(PhotoDTO.fromEntity);
  }

  @Get(':photoID')
  getById(@Param('photoID', PhotoPipe) photo: PhotoEntity): PhotoDTO {
    return PhotoDTO.fromEntity(photo);
  }
}

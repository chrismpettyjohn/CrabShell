import { PhotoWire } from '@crabshell/public-client';
import { IsBoolean, IsNumber, IsObject, IsUrl } from 'class-validator';
import { PhotoEntity, PhotoVisibility } from '../database/photo.entity';
import { Type } from 'class-transformer';
import { UserDTO } from '../user/user.dto';

export class PhotoDTO implements PhotoWire {
  @IsNumber()
  id!: number;

  @IsNumber()
  userId!: number;

  @IsNumber()
  roomId!: number;

  @IsNumber()
  timestamp!: number;

  @IsUrl()
  imageUrl!: string;

  @IsBoolean()
  visible!: boolean;

  @IsObject()
  @Type(() => UserDTO)
  user: UserDTO;

  static fromEntity(entity: PhotoEntity) {
    const dto = new PhotoDTO();
    dto.id = entity.id!;
    dto.userId = entity.userId;
    dto.roomId = entity.roomId;
    dto.timestamp = entity.timestamp;
    dto.imageUrl = entity.imageUrl;
    dto.visible = entity.visible === PhotoVisibility.Visible;
    dto.user = entity.user ? UserDTO.fromEntity(entity.user) : undefined;
    return dto;
  }
}

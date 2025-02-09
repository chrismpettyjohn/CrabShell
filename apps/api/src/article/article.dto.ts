import { ArticleWire } from '@crabshell/public-client';
import { IsISO8601, IsNumber, IsObject, IsString } from 'class-validator';
import { ArticleEntity } from '../database/article.entity';
import { Type } from 'class-transformer';
import { UserDTO } from '../user/user.dto';

export class ArticleDTO implements ArticleWire {
  @IsNumber()
  id!: number;

  @IsString()
  name!: string;

  @IsString()
  imageUrl!: string;

  @IsString()
  description!: string;

  @IsString()
  content!: string;

  @IsNumber()
  userId!: number;

  @IsISO8601()
  createdAt!: string;

  @IsISO8601()
  updatedAt!: string;

  @IsObject()
  @Type(() => UserDTO)
  user: UserDTO;

  static fromEntity(entity: ArticleEntity) {
    const dto = new ArticleDTO();
    dto.id = entity.id!;
    dto.name = entity.name;
    dto.imageUrl = entity.imageUrl;
    dto.description = entity.description;
    dto.content = entity.content;
    dto.userId = entity.userId;
    dto.user = UserDTO.fromEntity(entity.user);
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}

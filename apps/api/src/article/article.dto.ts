import { ArticleWire } from '../../../../libs/public-client/src';
import { IsISO8601, IsNumber, IsString } from 'class-validator';
import { ArticleEntity } from '../database/article.entity';

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

  static fromEntity(entity: ArticleEntity) {
    const dto = new ArticleDTO();
    dto.id = entity.id!;
    dto.name = entity.name;
    dto.imageUrl = entity.imageURL;
    dto.description = entity.description;
    dto.content = entity.content;
    dto.userId = entity.userId;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}

export class CreateArticleDTO 
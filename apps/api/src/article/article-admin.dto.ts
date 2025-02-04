import { IsISO8601, IsNumber, IsOptional, IsString } from 'class-validator';
import { ArticleEntity } from '../database/article.entity';
import {
  AdminArticleCreateParams,
  AdminArticleUpdateByIdParams,
  AdminArticleWire,
} from '@crabshell/admin-client';
import { ArticleDTO } from './article.dto';

export class AdminArticleDTO extends ArticleDTO implements AdminArticleWire {
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
    dto.imageUrl = entity.imageUrl;
    dto.description = entity.description;
    dto.content = entity.content;
    dto.userId = entity.userId;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}

export class CreateArticleDTO implements AdminArticleCreateParams {
  @IsString()
  name!: string;

  @IsString()
  imageUrl!: string;

  @IsString()
  description!: string;

  @IsString()
  content!: string;
}

export class UpdateArticleDTO implements AdminArticleUpdateByIdParams {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  content?: string;
}

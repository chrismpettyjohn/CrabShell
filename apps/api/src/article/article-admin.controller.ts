import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticlePipe } from './article.pipe';
import { ArticleEntity } from '../database/article.entity';
import { ArticleDTO } from './article.dto';
import { HasScope } from '../auth/has-scope.decorator';
import { ArticleRepository } from '../database/article.repository';
import {
  AdminArticleCreateResponse,
  AdminArticleDeleteByIdResponse,
  AdminArticleUpdateByIdResponse,
} from '@crabshell/admin-client';
import { ArticleGetByIdResponse } from '@crabshell/public-client';

@Controller('admin/articles')
@HasScope('manageArticles')
export class ArticleAdminController {
  constructor(private readonly articleRepo: ArticleRepository) {}

  @Post('')
  create(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
  ): AdminArticleCreateResponse {
    return ArticleDTO.fromEntity(article);
  }

  @Get('')
  async getAll(): Promise<ArticleDTO[]> {
    const articles: ArticleEntity[] = await this.articleRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return articles.map(ArticleDTO.fromEntity);
  }

  @Get(':articleID')
  getById(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
  ): ArticleGetByIdResponse {
    return ArticleDTO.fromEntity(article);
  }

  @Patch(':articleID')
  async updateById(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
    @Body() articleDto: ArticleDTO,
  ): Promise<AdminArticleUpdateByIdResponse> {
    await this.articleRepo.update({ id: article.id }, article);
    return true;
  }

  @Delete(':articleID')
  async deleteById(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
  ): Promise<AdminArticleDeleteByIdResponse> {
    await this.articleRepo.delete({
      id: article.id,
    });
    return true;
  }
}

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
  AdminArticleGetAllResponse,
  AdminArticleGetByIdResponse,
  AdminArticleUpdateByIdResponse,
} from '@crabshell/admin-client';
import { CreateArticleDTO } from './article-admin.dto';
import { GetSession } from '../auth/get-session.decorator';
import { UserEntity } from '../database/user.entity';

@Controller('admin/articles')
@HasScope('manageArticles')
export class ArticleAdminController {
  constructor(private readonly articleRepo: ArticleRepository) {}

  @Post('')
  async create(
    @Body() dto: CreateArticleDTO,
    @GetSession() user: UserEntity,
  ): Promise<AdminArticleCreateResponse> {
    const newArticle = await this.articleRepo.create({
      ...dto,
      userId: user.id!,
    });
    return ArticleDTO.fromEntity(newArticle);
  }

  @Get('')
  async getAll(): Promise<AdminArticleGetAllResponse> {
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
  ): AdminArticleGetByIdResponse {
    return ArticleDTO.fromEntity(article);
  }

  @Patch(':articleID')
  async updateById(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
    @Body() articleDto: ArticleDTO,
  ): Promise<AdminArticleUpdateByIdResponse> {
    await this.articleRepo.update({ id: article.id }, articleDto);
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

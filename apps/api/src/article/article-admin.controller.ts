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
import { ArticleRepository } from '../database/article.repository';
import {
  AdminArticleCreateResponse,
  AdminArticleDeleteByIdResponse,
  AdminArticleGetAllResponse,
  AdminArticleGetByIdResponse,
  AdminArticleUpdateByIdResponse,
} from '@crabshell/admin-client';
import { AdminUpdateArticleDTO, AdminCreateArticleDTO } from './article-admin.dto';
import { GetSession } from '../auth/get-session.decorator';
import { UserEntity } from '../database/user.entity';
import { HasScope } from '../auth/has-scope.decorator';

@Controller('admin/articles')
export class ArticleAdminController {
  constructor(private readonly articleRepo: ArticleRepository) {}

  @Post('')
  @HasScope('manageArticles')
  async create(
    @Body() dto: AdminCreateArticleDTO,
    @GetSession() user: UserEntity,
  ): Promise<AdminArticleCreateResponse> {
    const newArticle = await this.articleRepo.create({
      ...dto,
      userId: user.id!,
    });
    return ArticleDTO.fromEntity(newArticle);
  }

  @Get('')
  @HasScope('manageArticles')
  async getAll(): Promise<AdminArticleGetAllResponse> {
    const articles: ArticleEntity[] = await this.articleRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return articles.map(ArticleDTO.fromEntity);
  }

  @Get(':articleID')
  @HasScope('manageArticles')
  getById(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
  ): AdminArticleGetByIdResponse {
    return ArticleDTO.fromEntity(article);
  }

  @Patch(':articleID')
  @HasScope('manageArticles')
  async updateById(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
    @Body() articleDto: AdminUpdateArticleDTO,
  ): Promise<AdminArticleUpdateByIdResponse> {
    await this.articleRepo.update({ id: article.id }, articleDto);
    return true;
  }

  @Delete(':articleID')
  @HasScope('manageArticles')
  async deleteById(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
  ): Promise<AdminArticleDeleteByIdResponse> {
    await this.articleRepo.delete({
      id: article.id,
    });
    return true;
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { ArticlePipe } from './article.pipe';
import { ArticleEntity } from '../database/article.entity';
import { ArticleDTO } from './article.dto';
import { ArticleRepository } from '../database/article.repository';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleRepo: ArticleRepository) {}

  @Get('')
  async getAll(): Promise<ArticleDTO[]> {
    const articles: ArticleEntity[] = await this.articleRepo.find({
      order: {
        id: 'DESC',
      },
      relations: ['user', 'user.rank'],
    });
    return articles.map(ArticleDTO.fromEntity);
  }

  @Get(':articleID')
  getById(@Param('articleID', ArticlePipe) article: ArticleEntity): ArticleDTO {
    return ArticleDTO.fromEntity(article);
  }
}

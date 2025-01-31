import { Controller, Get, Param } from '@nestjs/common';
import { ArticlePipe } from './article.pipe';
import { ArticleEntity } from '../database/article.entity';
import { ArticleDTO } from './article.dto';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('')
  async getAll(): Promise<ArticleDTO[]> {
    const articles: ArticleEntity[] = await this.articleService.getAll();
    return articles.map(ArticleDTO.fromEntity);
  }

  @Get(':articleID')
  getById(@Param('articleID', ArticlePipe) article: ArticleEntity): ArticleDTO {
    return ArticleDTO.fromEntity(article);
  }
}

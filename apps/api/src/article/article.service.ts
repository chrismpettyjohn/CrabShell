import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../database/article.repository';
import { ArticleEntity } from '../database/article.entity';

@Injectable()
export class ArticleService {
  constructor(private readonly articleRepo: ArticleRepository) {}

  async getAll(): Promise<ArticleEntity[]> {
    return this.articleRepo.find({
      order: {
        id: 'DESC',
      },
    });
  }
  getById(articleId: number): Promise<ArticleEntity> {
    return this.articleRepo.findOneOrFail({ id: articleId });
  }
}

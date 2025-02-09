import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { ArticleRepository } from '../database/article.repository';
import { ArticleEntity } from '../database/article.entity';

@Injectable()
export class ArticlePipe implements PipeTransform {
  constructor(private readonly articleRepo: ArticleRepository) {}

  async transform(articleID: number): Promise<ArticleEntity> {
    const article = await this.articleRepo.findOne({
      where: {
        id: articleID,
      },
      relations: ['user', 'user.rank'],
    });

    if (!article) {
      throw new NotFoundException('Article does not exist');
    }

    return article;
  }
}

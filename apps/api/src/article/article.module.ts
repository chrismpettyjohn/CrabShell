import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArticlePipe } from './article.pipe';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticleService, ArticlePipe],
  exports: [ArticleService, ArticlePipe],
})
export class ArticleModule {}

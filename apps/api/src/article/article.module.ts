import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArticlePipe } from './article.pipe';
import { ArticleController } from './article.controller';
import { ArticleAdminController } from './article-admin.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController, ArticleAdminController],
  providers: [ArticlePipe],
  exports: [ArticlePipe],
})
export class ArticleModule {}

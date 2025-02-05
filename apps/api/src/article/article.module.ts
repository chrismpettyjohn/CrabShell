import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArticlePipe } from './article.pipe';
import { ArticleController } from './article.controller';
import { ArticleAdminController } from './article-admin.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [ArticleController, ArticleAdminController],
  providers: [ArticlePipe],
  exports: [ArticlePipe],
})
export class ArticleModule {}

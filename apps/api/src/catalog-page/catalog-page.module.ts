import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { CatalogPagePipe } from './catalog-page.pipe';
import { CatalogPageAdminController } from './catalog-page-admin.controller';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [CatalogPageAdminController],
  providers: [CatalogPagePipe],
  exports: [CatalogPagePipe],
})
export class CatalogPageModule {}

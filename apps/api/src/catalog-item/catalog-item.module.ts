import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { CatalogItemPipe } from './catalog-item.pipe';
import { CatalogItemAdminController } from './catalog-item-admin.controller';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [CatalogItemAdminController],
  providers: [CatalogItemPipe],
  exports: [CatalogItemPipe],
})
export class CatalogItemModule {}

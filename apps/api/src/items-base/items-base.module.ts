import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';
import { ItemsBasePipe } from './items-base.pipe';
import { ItemsBaseAdminController } from './items-base-admin.controller';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [ItemsBaseAdminController],
  providers: [ItemsBasePipe],
  exports: [ItemsBasePipe],
})
export class ItemsBaseModule {}

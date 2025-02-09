import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BanPipe } from './ban.pipe';
import { AuthModule } from '../auth/auth.module';
import { BanAdminController } from './ban-admin.controller';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [BanAdminController],
  providers: [BanPipe],
  exports: [BanPipe],
})
export class BanModule {}

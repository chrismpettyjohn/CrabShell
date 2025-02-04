import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { BadgeService } from './badge.service';
import { BadgePipe } from './badge.pipe';
import { BadgeAdminController } from './badge-admin.controller';

@Module({
  imports: [AuthModule],
  controllers: [BadgeAdminController],
  providers: [BadgeService, BadgePipe],
  exports: [BadgeService, BadgePipe],
})
export class BadgeModule {}

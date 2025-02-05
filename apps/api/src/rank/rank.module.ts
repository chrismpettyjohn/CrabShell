import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RankController } from './rank.controller';
import { RankPipe } from './rank.pipe';
import { RankAdminController } from './rank-admin.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [RankController, RankAdminController],
  providers: [RankPipe],
  exports: [RankPipe],
})
export class RankModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RankController } from './rank.controller';
import { RankService } from './rank.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankService],
  exports: [RankService],
})
export class RankModule {}

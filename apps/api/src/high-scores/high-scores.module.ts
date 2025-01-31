import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HighScoresController } from './high-scores.controller';
import { HighScoresService } from './high-scores.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HighScoresController],
  providers: [HighScoresService],
  exports: [HighScoresService],
})
export class HighScoresModule {}

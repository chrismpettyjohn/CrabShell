import { Module } from '@nestjs/common';
import { FindRetrosService } from './findretros.service';
import { AuthModule } from '../auth/auth.module';
import { FindRetrosController } from './findretros.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [FindRetrosController],
  providers: [FindRetrosService],
  exports: [FindRetrosService],
})
export class FindRetrosModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GroupPipe } from './group.pipe';
import { GroupControllers } from './group.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [GroupControllers],
  providers: [GroupPipe],
  exports: [GroupPipe],
})
export class GroupModule {}

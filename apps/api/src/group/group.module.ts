import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GroupService } from './group.service';
import { GroupPipe } from './group.pipe';
import { GroupControllers } from './group.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [GroupControllers],
  providers: [GroupService, GroupPipe],
  exports: [GroupService, GroupPipe],
})
export class GroupModule {}

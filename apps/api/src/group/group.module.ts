import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GroupService } from './group.service';
import { GroupPipe } from './group.pipe';
import { GroupControllers } from './group.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [GroupControllers],
  providers: [GroupService, GroupPipe],
  exports: [GroupService, GroupPipe],
})
export class GroupModule {}

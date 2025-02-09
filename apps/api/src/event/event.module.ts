import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { EventAdminController } from './event-admin.controller';
import { EventController } from './event.controller';
import { EventPipe } from './event.pipe';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [EventAdminController, EventController],
  providers: [EventPipe],
  exports: [EventPipe],
})
export class EventModule {}

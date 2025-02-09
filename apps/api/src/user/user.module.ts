import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserPipe } from './user.pipe';
import { UserAdminController } from './user-admin.controller';
import { AuthModule } from '../auth/auth.module';
import { UserCommandLogAdminController } from './user-command-log-admin.controller';
import { UserNameChangeLogAdminController } from './user-name-change-log-admin.controller';
import { UserPrivateMessageLogAdminController } from './user-private-message-log-admin.controller';
import { UserRoomEnterLogAdminController } from './user-room-enter-log-admin.controller';
import { UserPublicMessageLogAdminController } from './user-public-message-log-admin.controller';
import { UserTradeLogAdminController } from './user-trade-log-admin.controller';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [
    UserCommandLogAdminController,
    UserNameChangeLogAdminController,
    UserPrivateMessageLogAdminController,
    UserPublicMessageLogAdminController,
    UserRoomEnterLogAdminController,
    UserTradeLogAdminController,
    UserAdminController,
    UserController,
  ],
  providers: [UserService, UserPipe],
  exports: [UserService, UserPipe],
})
export class UserModule {}

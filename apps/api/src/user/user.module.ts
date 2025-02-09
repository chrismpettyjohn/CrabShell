import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserPipe } from './user.pipe';
import { UserAdminController } from './user-admin.controller';
import { AuthModule } from '../auth/auth.module';
import { UserCommandLogAdminController } from './user-command-log-admin.controller';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [
    UserCommandLogAdminController,
    UserAdminController,
    UserController,
  ],
  providers: [UserService, UserPipe],
  exports: [UserService, UserPipe],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserPipe } from './user.pipe';
import { UserAdminController } from './user-admin.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [UserController, UserAdminController],
  providers: [UserService, UserPipe],
  exports: [UserService, UserPipe],
})
export class UserModule {}

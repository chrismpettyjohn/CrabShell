import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserPipe } from './user.pipe';
import { UserAdminController } from './user-admin.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, UserAdminController],
  providers: [UserService, UserPipe],
  exports: [UserService, UserPipe],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserPipe } from './user.pipe';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserPipe],
  exports: [UserService, UserPipe],
})
export class UserModule {}

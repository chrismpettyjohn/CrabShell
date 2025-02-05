import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SessionGuard } from './session.guard';
import { DatabaseModule } from '../database/database.module';
import { ScopeGuard } from './scope.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, SessionGuard, ScopeGuard],
  exports: [AuthService, ScopeGuard],
})
export class AuthModule {}

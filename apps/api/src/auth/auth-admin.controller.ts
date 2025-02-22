import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './auth.dto';
import { HasScope } from './has-scope.decorator';
import { AdminUserDTO } from '../user/user-admin.dto';
import { GetSession } from './get-session.decorator';
import { UserEntity } from '../database/user.entity';
import { AuthLoginResponse } from '@crabshell/admin-client';

@Controller('admin/auth')
export class AuthAdminController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: AuthLoginDTO): Promise<AuthLoginResponse> {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @HasScope('accessAdminPanel')
  getProfile(@GetSession() user: UserEntity): AdminUserDTO {
    return AdminUserDTO.fromEntity(user);
  }
}

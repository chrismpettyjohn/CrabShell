import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './auth.dto';
import { SessionGuard } from './session.guard';
import { HasScope } from './has-scope.decorator';
import { AdminUserDTO } from '../user/user-admin.dto';
import { GetSession } from './get-session.decorator';
import { UserEntity } from '../database/user.entity';

@Controller('admin/auth')
export class AuthAdminController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body() loginDto: AuthLoginDTO,
    @Res() response,
  ) {
    return this.authService.login(
      loginDto,
      response,
    );
  }
  
  @Post('logout')
  @UseGuards(SessionGuard)
  logout(@Res() response) {
    return this.authService.logout(
      response,
    );
  }

  @Get('profile')
  @HasScope('accessAdminPanel')
  getProfile(@GetSession() user: UserEntity): AdminUserDTO {
    return AdminUserDTO.fromEntity(user);
  }
}

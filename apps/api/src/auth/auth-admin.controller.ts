import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './auth.dto';
import { SessionGuard } from './session.guard';
import { HasScope } from './has-scope.decorator';

@Controller('admin/auth')
export class AuthAdminController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body() loginDto: AuthLoginDTO,
    @Req() request,
    @Res() response,
  ) {
    return this.authService.login(
      loginDto,
      request,
      response,
    );
  }
  
  @Post('logout')
  @UseGuards(SessionGuard)
  logout(@Req() request, @Res() response) {
    return this.authService.logout(
      request,
      response,
    );
  }

  @Get('profile')
  @HasScope('accessAdminPanel')
  getProfile(
    @Req() request,
  ) {
    return this.authService.getProfile(
      request
    );
  }
}

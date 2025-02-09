import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO, AuthRegisterDTO } from './auth.dto';
import { SessionGuard } from './session.guard';
import { UserDTO } from '../user/user.dto';
import { UserEntity } from '../database/user.entity';
import { Response } from 'express';
import { GetSession } from './get-session.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: AuthLoginDTO, @Res() response): Promise<Response> {
    return this.authService.login(loginDto, response);
  }

  @Post('register')
  register(@Body() registerDto: AuthRegisterDTO, @Res() response): Promise<Response> {
    return this.authService.register(registerDto, response);
  }

  @Post('logout')
  @UseGuards(SessionGuard)
  logout(@Res() response): Response {
    return this.authService.logout(response);
  }

  @Get('sso')
  @UseGuards(SessionGuard)
  async generateSSO(@GetSession()user: UserEntity): Promise<{ sso: string }> {
    return { sso: await this.authService.generateSSO(user.id!) };
  }

  @Get('profile')
  @UseGuards(SessionGuard)
  getProfile(@GetSession() user: UserEntity): UserDTO {
    return UserDTO.fromEntity(user);
  }
}

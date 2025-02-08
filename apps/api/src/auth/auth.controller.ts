import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO, AuthRegisterDTO } from './auth.dto';
import { SessionGuard } from './session.guard';
import { UserDTO } from '../user/user.dto';
import { UserEntity } from '../database/user.entity';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: AuthLoginDTO, @Req() request, @Res() response): Promise<Response> {
    return this.authService.login(loginDto, request, response);
  }

  @Post('register')
  register(@Body() registerDto: AuthRegisterDTO, @Req() request): Promise<Response> {
    return this.authService.register(registerDto, request, request);
  }

  @Post('logout')
  @UseGuards(SessionGuard)
  async logout(@Req() request, @Res() response): Promise<any> {
    return this.authService.logout(request, response);
  }

  @Get('sso')
  @UseGuards(SessionGuard)
  async generateSSO(@Req() request): Promise<{ sso: string }> {
    const user: UserEntity = await this.authService.getProfile(request);
    return { sso: await this.authService.generateSSO(user.id!) };
  }

  @Get('profile')
  @UseGuards(SessionGuard)
  async getProfile(@Req() request): Promise<UserDTO> {
    const result: UserEntity = await this.authService.getProfile(request);
    return UserDTO.fromEntity(result);
  }
}

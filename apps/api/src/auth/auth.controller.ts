import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from './auth.service';
import { AuthLoginDTO, AuthRegisterDTO } from './auth.dto';
import { SessionGuard } from './session.guard';
import { UserDTO } from '../user/user.dto';
import { UserEntity } from '../database/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: AuthLoginDTO, @Res() reply: FastifyReply) {
    const result: UserEntity = await this.authService.login(loginDto, reply);
    return reply.send(UserDTO.fromEntity(result));
  }

  @Post('register')
  async register(
    @Body() registerDto: AuthRegisterDTO,
    @Res() reply: FastifyReply,
  ) {
    const result: UserEntity = await this.authService.register(
      registerDto,
      reply,
    );
    return reply.send(UserDTO.fromEntity(result));
  }

  @Post('logout')
  @UseGuards(SessionGuard)
  async logout(@Req() request: FastifyRequest, @Res() reply: FastifyReply) {
    const result = await this.authService.logout(
      Number(request.cookies['sessionId']),
      reply,
    );
    return reply.send(result);
  }

  @Get('profile')
  @UseGuards(SessionGuard)
  async getProfile(
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ): Promise<UserDTO> {
    const result: UserEntity = await this.authService.getProfile(
      Number(request.cookies['sessionId']),
    );
    return reply.send(UserDTO.fromEntity(result));
  }
}

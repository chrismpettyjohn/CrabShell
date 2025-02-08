import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  UseGuards,
  Req,
  Request, Response
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO, AuthRegisterDTO } from './auth.dto';
import { SessionGuard } from './session.guard';
import { UserDTO } from '../user/user.dto';
import { UserEntity } from '../database/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: AuthLoginDTO,
    @Req() request: Request,
    @Res() reply: Response,
  ) {
    const result: UserEntity = await this.authService.login(
      loginDto,
      request,
      reply,
    );
    return reply.send(UserDTO.fromEntity(result));
  }

  @Post('register')
  async register(
    @Body() registerDto: AuthRegisterDTO,
    @Req() request: Request,
    @Res() reply: Response,
  ) {
    const result: UserEntity = await this.authService.register(
      registerDto,
      request,
      reply,
    );
    return reply.send(UserDTO.fromEntity(result));
  }

  @Post('logout')
  @UseGuards(SessionGuard)
  async logout(@Req() request: Request, @Res() reply: Response) {
    const result = await this.authService.logout(
      Number(request.cookies['sessionId']),
      reply,
    );
    return reply.send(result);
  }

  @Get('sso')
  @UseGuards(SessionGuard)
  async generateSSO(
    @Req() request: Request,
  ): Promise<{sso: string}> {
    const user: UserEntity = await this.authService.getProfile(
      Number(request.cookies['sessionId']),
    );

    const sso = await this.authService.generateSSO(user.id!);
    return { sso }
  }

  @Get('profile')
  @UseGuards(SessionGuard)
  async getProfile(
    @Req() request: Request,
  ): Promise<UserDTO> {
    const result: UserEntity = await this.authService.getProfile(
      Number(request.cookies['sessionId']),
    );
    return UserDTO.fromEntity(result)
  }
}

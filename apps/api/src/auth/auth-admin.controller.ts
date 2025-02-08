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
import { AuthLoginDTO } from './auth.dto';
import { SessionGuard } from './session.guard';
import { UserDTO } from '../user/user.dto';
import { UserEntity } from '../database/user.entity';
import { HasScope } from './has-scope.decorator';

@Controller('admin/auth')
export class AuthAdminController {
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
  @Post('logout')
  @UseGuards(SessionGuard)
  async logout(@Req() request: Request, @Res() reply: Response) {
    const result = await this.authService.logout(
      Number(request.cookies['sessionId']),
      reply,
    );
    return reply.send(result);
  }

  @Get('profile')
  @HasScope('accessAdminPanel')
  async getProfile(
    @Req() request: Request,
    @Res() reply: Response,
  ): Promise<UserDTO> {
    const result: UserEntity = await this.authService.getProfile(
      Number(request.cookies['sessionId']),
    );
    return UserDTO.fromEntity(result)
  }
}

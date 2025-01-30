import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { UserEntity } from '../database/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('online')
  async login(): Promise<UserDTO[]> {
    const onlineUsers: UserEntity[] = await this.userService.onlineUsers();
    return onlineUsers.map(UserDTO.fromEntity);
  }
}

import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UserPipe } from './user.pipe';
import { UserEntity } from '../database/user.entity';
import { UserDTO } from './user.dto';
import { HasScope } from '../auth/has-scope.decorator';
import { UserRepository } from '../database/user.repository';
import {
  AdminUserDeleteByIdResponse,
  AdminUserGetByIdResponse,
  AdminUserUpdateByIdResponse,
} from '@crabshell/admin-client';

@Controller('admin/users')
@HasScope('manageUsers')
export class UserAdminController {
  constructor(private readonly userRepo: UserRepository) {}

  @Get('')
  async getAll(): Promise<UserDTO[]> {
    const users: UserEntity[] = await this.userRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return users.map(UserDTO.fromEntity);
  }

  @Get(':userID')
  getById(
    @Param('userID', UserPipe) user: UserEntity,
  ): AdminUserGetByIdResponse {
    return UserDTO.fromEntity(user);
  }

  @Patch(':userID')
  async updateById(
    @Param('userID', UserPipe) user: UserEntity,
    @Body() userDto: UserDTO,
  ): Promise<AdminUserUpdateByIdResponse> {
    await this.userRepo.update({ id: user.id }, userDto);
    return true;
  }

  @Delete(':userID')
  async deleteById(
    @Param('userID', UserPipe) user: UserEntity,
  ): Promise<AdminUserDeleteByIdResponse> {
    await this.userRepo.delete({
      id: user.id,
    });
    return true;
  }
}

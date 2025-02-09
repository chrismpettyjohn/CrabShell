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
import { UpdateUserByIdDTO } from './user-admin.dto';

@Controller('admin/users')
export class UserAdminController {
  constructor(private readonly userRepo: UserRepository) {}

  @Get('')
  @HasScope('manageUsers')
  async getAll(): Promise<UserDTO[]> {
    const users: UserEntity[] = await this.userRepo.find({
      order: {
        id: 'DESC',
      },
      relations: ['rank']
    });
    return users.map(UserDTO.fromEntity);
  }

  @Get(':userID')
  @HasScope('manageUsers')
  getById(
    @Param('userID', UserPipe) user: UserEntity,
  ): AdminUserGetByIdResponse {
    return UserDTO.fromEntity(user);
  }

  @Patch(':userID')
  @HasScope('manageUsers')
  async updateById(
    @Param('userID', UserPipe) user: UserEntity,
    @Body() userDto: UpdateUserByIdDTO,
  ): Promise<AdminUserUpdateByIdResponse> {
    await this.userRepo.update({ id: user.id }, userDto);
    return true;
  }

  @Delete(':userID')
  @HasScope('manageUsers')
  async deleteById(
    @Param('userID', UserPipe) user: UserEntity,
  ): Promise<AdminUserDeleteByIdResponse> {
    await this.userRepo.delete({
      id: user.id,
    });
    return true;
  }
}

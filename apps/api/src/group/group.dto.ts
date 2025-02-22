import { GroupWire } from '@crabshell/public-client';
import { IsArray, IsInt, IsNumber, IsObject, IsString } from 'class-validator';
import { GroupEntity } from '../database/group.entity';
import { Type } from 'class-transformer';
import { UserDTO } from '../user/user.dto';

export class GroupDTO implements GroupWire {
  @IsInt()
  id!: number;

  @IsString()
  name!: string;

  @IsString()
  badge: string;

  @IsNumber()
  createdAt: number;

  @Type(() => Array<UserDTO>)
  @IsArray()
  users: UserDTO[];

  static fromEntity(entity: GroupEntity): GroupDTO {
    const dto = new GroupDTO();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.badge = entity.badge;
    dto.createdAt = entity.createdAt;
    dto.users = entity.members!.map((_) => UserDTO.fromEntity(_.user));
    return dto;
  }
}

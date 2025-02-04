import { GroupWire } from '../../../../libs/public-client/src';
import { IsInt, IsString } from 'class-validator';
import { GroupEntity } from '../database/group.entity';

export class GroupDTO implements GroupWire {
  @IsInt()
  id!: number;

  @IsString()
  name!: string;

  @IsString()
  badge: string;

  static fromEntity(entity: GroupEntity): GroupDTO {
    const dto = new GroupDTO();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.badge = entity.badge;
    return dto;
  }
}

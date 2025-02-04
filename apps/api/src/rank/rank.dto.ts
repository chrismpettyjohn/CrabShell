import { RankWire } from '@crabshell/public-client';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { UserDTO } from '../user/user.dto';
import { RankEntity } from '../database/rank.entity';

export class RankDTO implements RankWire {
  @IsNumber()
  id!: number;

  @IsString()
  name!: string;

  @IsString()
  badgeCode!: string;

  @IsArray()
  members!: UserDTO[];

  static fromEntity(entity: RankEntity) {
    const dto = new RankDTO();
    dto.id = entity.id!;
    dto.name = entity.name;
    dto.badgeCode = entity.badgeCode;
    dto.members = entity.members?.map(UserDTO.fromEntity);
    return dto;
  }
}

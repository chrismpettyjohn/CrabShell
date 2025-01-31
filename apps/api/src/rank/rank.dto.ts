import { RankWire } from '@crabshell/client';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { UserDTO } from '../user/user.dto';

export class RankDTO implements RankWire {
  @IsNumber()
  id!: number;

  @IsString()
  name!: string;

  @IsString()
  badge!: string;

  @IsArray()
  members!: UserDTO[];
}

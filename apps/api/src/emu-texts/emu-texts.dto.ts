import { IsOptional, IsString } from 'class-validator';
import { EmuTextsEntity } from '../database/emu-texts.entity';
import {
  AdminEmuTextsCreateParams,
  AdminEmuTextsUpdateByIdParams,
  AdminEmuTextsWire,
} from '@crabshell/admin-client';

export class AdminEmuTextsDTO implements AdminEmuTextsWire {
  @IsString()
  key!: string;

  @IsString()
  value!: string;

  static fromEntity(entity: EmuTextsEntity) {
    const dto = new AdminEmuTextsDTO();
    dto.key = entity.key;
    dto.value = entity.value;
    return dto;
  }
}

export class AdminCreateEmuTextsDTO implements AdminEmuTextsCreateParams {
  @IsString()
  key!: string;

  @IsString()
  value!: string;
}

export class AdminUpdateEmuTextsDTO implements AdminEmuTextsUpdateByIdParams {
  @IsString()
  @IsOptional()
  key?: string;

  @IsString()
  @IsOptional()
  value?: string;
}

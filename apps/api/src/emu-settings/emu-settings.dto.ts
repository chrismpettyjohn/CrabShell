import { IsOptional, IsString } from 'class-validator';
import { EmuSettingsEntity } from '../database/emu-settings.entity';
import {
  AdminEmuSettingsCreateParams,
  AdminEmuSettingsUpdateByKeyParams,
  AdminEmuSettingsWire,
} from '@crabshell/admin-client';

export class AdminEmuSettingsDTO implements AdminEmuSettingsWire {
  @IsString()
  key!: string;

  @IsString()
  value!: string;

  static fromEntity(entity: EmuSettingsEntity) {
    const dto = new AdminEmuSettingsDTO();
    dto.key = entity.key;
    dto.value = entity.value;
    return dto;
  }
}

export class AdminCreateEmuSettingsDTO implements AdminEmuSettingsCreateParams {
  @IsString()
  key!: string;

  @IsString()
  value!: string;
}

export class AdminUpdateEmuSettingsDTO
  implements AdminEmuSettingsUpdateByKeyParams
{
  @IsString()
  @IsOptional()
  key?: string;

  @IsString()
  @IsOptional()
  value?: string;
}

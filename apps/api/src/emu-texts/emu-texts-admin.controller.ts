import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EmuTextsEntity } from '../database/emu-texts.entity';
import { HasScope } from '../auth/has-scope.decorator';
import {
  AdminEmuTextsCreateResponse,
  AdminEmuTextsDeleteByKeyResponse,
  AdminEmuTextsGetAllResponse,
  AdminEmuTextsGetByKeyResponse,
  AdminEmuTextsUpdateByKeyResponse,
} from '@crabshell/admin-client';
import { EmuTextsRepository } from '../database/emu-texts.repository';
import { EmuTextsPipe } from './emu-texts.pipe';
import { AdminEmuTextsDTO } from './emu-texts.dto';

@Controller('admin/emu-texts')
export class EmuTextsAdminController {
  constructor(private readonly emuTextsRepo: EmuTextsRepository) {}

  @Post('')
  @HasScope('manageEmu')
  create(
    @Param('key', EmuTextsPipe) emuText: EmuTextsEntity,
  ): AdminEmuTextsCreateResponse {
    return AdminEmuTextsDTO.fromEntity(emuText);
  }

  @Get('')
  @HasScope('manageEmu')
  async getAll(): Promise<AdminEmuTextsGetAllResponse> {
    const emuTexts: EmuTextsEntity[] = await this.emuTextsRepo.find({
      order: {
        key: 'DESC',
      },
    });
    return emuTexts.map(AdminEmuTextsDTO.fromEntity);
  }

  @Get(':emuTextID')
  @HasScope('manageEmu')
  getByKey(
    @Param('emuTextID', EmuTextsPipe) emuText: EmuTextsEntity,
  ): AdminEmuTextsGetByKeyResponse {
    return AdminEmuTextsDTO.fromEntity(emuText);
  }

  @Patch(':emuTextID')
  @HasScope('manageEmu')
  async updateByKey(
    @Param('emuTextID', EmuTextsPipe) emuText: EmuTextsEntity,
    @Body() emuTextDto: AdminEmuTextsDTO,
  ): Promise<AdminEmuTextsUpdateByKeyResponse> {
    await this.emuTextsRepo.update({ key: emuText.key }, emuTextDto);
    return true;
  }

  @Delete(':emuTextID')
  @HasScope('manageEmu')
  async deleteByKey(
    @Param('emuTextID', EmuTextsPipe) emuText: EmuTextsEntity,
  ): Promise<AdminEmuTextsDeleteByKeyResponse> {
    await this.emuTextsRepo.delete({
      key: emuText.key,
    });
    return true;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemBaseEntity } from '../database/items-base.entity';
import { HasScope } from '../auth/has-scope.decorator';
import {
  AdminItemsBaseCreateResponse,
  AdminItemsBaseDeleteByIdResponse,
  AdminItemsBaseGetAllResponse,
  AdminItemsBaseGetByIdResponse,
  AdminItemsBaseUpdateByIdResponse,
} from '@crabshell/admin-client';
import { ItemBaseRepository } from '../database/items-base.repository';
import { ItemsBasePipe } from './items-base.pipe';
import { AdminCreateItemsBaseDTO, AdminItemsBaseDTO } from './items-base.dto';

@Controller('admin/items-base')
export class ItemsBaseAdminController {
  constructor(private readonly itemsBaseRepo: ItemBaseRepository) {}

  @Post('')
  @HasScope('manageEmu')
  async create(
    @Body() dto: AdminCreateItemsBaseDTO,
  ): Promise<AdminItemsBaseCreateResponse> {
    const newItem = await this.itemsBaseRepo.create(dto);
    return AdminItemsBaseDTO.fromEntity(newItem);
  }

  @Get('')
  @HasScope('manageEmu')
  async getAll(): Promise<AdminItemsBaseGetAllResponse> {
    const itemsBase: ItemBaseEntity[] = await this.itemsBaseRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return itemsBase.map(AdminItemsBaseDTO.fromEntity);
  }

  @Get(':itemBaseId')
  @HasScope('manageEmu')
  getById(
    @Param('itemBaseId', ItemsBasePipe) itemBase: ItemBaseEntity,
  ): AdminItemsBaseGetByIdResponse {
    return AdminItemsBaseDTO.fromEntity(itemBase);
  }

  @Patch(':itemBaseId')
  @HasScope('manageEmu')
  async updateById(
    @Param('itemBaseId', ItemsBasePipe) itemBase: ItemBaseEntity,
    @Body() itemBaseDto: AdminItemsBaseDTO,
  ): Promise<AdminItemsBaseUpdateByIdResponse> {
    await this.itemsBaseRepo.update({ id: itemBase.id }, itemBaseDto);
    return true;
  }

  @Delete(':itemBaseId')
  @HasScope('manageEmu')
  async deleteById(
    @Param('itemBaseId', ItemsBasePipe) itemBase: ItemBaseEntity,
  ): Promise<AdminItemsBaseDeleteByIdResponse> {
    await this.itemsBaseRepo.delete({
      id: itemBase.id,
    });
    return true;
  }
}

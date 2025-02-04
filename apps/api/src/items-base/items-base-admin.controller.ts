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
@HasScope('manageEmu')
export class ItemsBaseAdminController {
  constructor(private readonly itemsBaseRepo: ItemBaseRepository) {}

  @Post('')
  async create(
    @Body() dto: AdminCreateItemsBaseDTO,
  ): Promise<AdminItemsBaseCreateResponse> {
    const newItem = await this.itemsBaseRepo.create(dto);
    return AdminItemsBaseDTO.fromEntity(newItem);
  }

  @Get('')
  async getAll(): Promise<AdminItemsBaseGetAllResponse> {
    const itemsBase: ItemBaseEntity[] = await this.itemsBaseRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return itemsBase.map(AdminItemsBaseDTO.fromEntity);
  }

  @Get(':itemBaseId')
  getById(
    @Param('itemBaseId', ItemsBasePipe) itemBase: ItemBaseEntity,
  ): AdminItemsBaseGetByIdResponse {
    return AdminItemsBaseDTO.fromEntity(itemBase);
  }

  @Patch(':itemBaseId')
  async updateById(
    @Param('itemBaseId', ItemsBasePipe) itemBase: ItemBaseEntity,
    @Body() itemBaseDto: AdminItemsBaseDTO,
  ): Promise<AdminItemsBaseUpdateByIdResponse> {
    await this.itemsBaseRepo.update({ id: itemBase.id }, itemBaseDto);
    return true;
  }

  @Delete(':itemBaseId')
  async deleteById(
    @Param('itemBaseId', ItemsBasePipe) itemBase: ItemBaseEntity,
  ): Promise<AdminItemsBaseDeleteByIdResponse> {
    await this.itemsBaseRepo.delete({
      id: itemBase.id,
    });
    return true;
  }
}

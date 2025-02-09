import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EventRepository } from '../database/event.repository';
import { HasScope } from '../auth/has-scope.decorator';
import {
  AdminEventCreateDTO,
  AdminEventDTO,
  AdminEventUpdateDTO,
} from './event-admin.dto';
import { GetSession } from '../auth/get-session.decorator';
import { UserEntity } from '../database/user.entity';
import { EventPipe } from './event.pipe';
import { EventEntity } from '../database/event.entity';

@Controller('admin/events')
export class EventAdminController {
  constructor(private readonly eventRepo: EventRepository) {}

  @Get('')
  @HasScope('manageEvents')
  async getAllEvents(): Promise<AdminEventDTO[]> {
    const events = await this.eventRepo.find({
      order: {
        id: 'DESC',
      },
    });
    return events.map(AdminEventDTO.fromEntity);
  }

  @Post('')
  @HasScope('manageEvents')
  async createEvent(
    @Body() dto: AdminEventCreateDTO,
    @GetSession() user: UserEntity,
  ): Promise<AdminEventDTO> {
    const newEvent = await this.eventRepo.create({
      ...dto,
      userId: user.id!,
      createdAt: +new Date(),
      updatedAt: +new Date(),
    });
    return AdminEventDTO.fromEntity(newEvent);
  }

  @Get(':eventId')
  @HasScope('manageEvents')
  getById(@Param('eventId', EventPipe) event: EventEntity): AdminEventDTO {
    return AdminEventDTO.fromEntity(event);
  }

  @Patch(':eventId')
  @HasScope('manageEvents')
  async updateById(
    @Param('eventId', EventPipe) event: EventEntity,
    @Body() dto: AdminEventUpdateDTO,
    @GetSession() user: UserEntity,
  ): Promise<{ success: boolean }> {
    await this.eventRepo.update(
      { id: event.id! },
      {
        ...dto,
        userId: user.id!,

        updatedAt: +new Date(),
      },
    );
    return { success: true };
  }

  @Delete(':eventId')
  @HasScope('manageEvents')
  async deleteById(
    @Param('eventId', EventPipe) event: EventEntity,
  ): Promise<{ success: boolean }> {
    await this.eventRepo.delete({ id: event.id! });
    return { success: true };
  }
}

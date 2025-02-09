import { Controller, Get, Param } from '@nestjs/common';
import { EventRepository } from '../database/event.repository';
import { EventDTO } from './event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventRepo: EventRepository) {}

  @Get(':date')
  async getEventsForDate(@Param('date') date: string): Promise<EventDTO[]> {
    console.log({ date });
    const matchingEvents = await this.eventRepo.find({
      order: {
        id: 'DESC',
      },
      where: {},
    });
    return matchingEvents.map(EventDTO.fromEntity);
  }
}

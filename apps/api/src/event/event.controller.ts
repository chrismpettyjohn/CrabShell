import { Controller, Get, Param } from '@nestjs/common';
import { EventRepository } from '../database/event.repository';
import { EventDTO } from './event.dto';
import { MoreThanOrEqual, LessThanOrEqual } from 'typeorm';

@Controller('events')
export class EventController {
  constructor(private readonly eventRepo: EventRepository) {}

  @Get(':date')
  async getEventsForDate(@Param('date') date: string): Promise<EventDTO[]> {
    const [month, day, year] = date.split('-').map(Number);
    const startOfDay = Math.floor(
      new Date(year, month - 1, day, 0, 0, 0, 0).getTime() / 1000,
    );
    const endOfDay = Math.floor(
      new Date(year, month - 1, day, 23, 59, 59, 999).getTime() / 1000,
    );

    const matchingEvents = await this.eventRepo.find({
      where: {
        startsAt: LessThanOrEqual(endOfDay),
        endsAt: MoreThanOrEqual(startOfDay),
      },
      order: { id: 'DESC' },
      relations: ['user', 'user.rank'],
    });
    return matchingEvents.map(EventDTO.fromEntity);
  }
}

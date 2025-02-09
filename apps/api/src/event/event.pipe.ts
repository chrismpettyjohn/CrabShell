import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { EventEntity } from '../database/event.entity';
import { EventRepository } from '../database/event.repository';

@Injectable()
export class EventPipe implements PipeTransform {
  constructor(private readonly eventRepo: EventRepository) {}

  async transform(eventId: number): Promise<EventEntity> {
    const event = await this.eventRepo.findOne({
      where: {
        id: eventId,
      },
    });

    if (!event) {
      throw new NotFoundException('Event does not exist');
    }

    return event;
  }
}

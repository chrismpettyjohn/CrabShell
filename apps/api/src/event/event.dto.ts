import { IsNumber, IsString } from 'class-validator';
import { EventEntity } from '../database/event.entity';

export class EventDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  userId: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  startsAt: number;

  @IsNumber()
  endsAt: number;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;

  static fromEntity(entity: EventEntity): EventDTO {
    const dto = new EventDTO();
    dto.id = entity.id!;
    dto.userId = entity.userId;
    dto.title = entity.title;
    dto.content = entity.content;
    dto.startsAt = entity.startsAt;
    dto.endsAt = entity.endsAt;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}

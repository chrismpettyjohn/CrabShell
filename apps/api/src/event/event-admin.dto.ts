import { IsNumber, IsOptional, IsString } from 'class-validator';
import { EventDTO } from './event.dto';

export class AdminEventDTO extends EventDTO {}

export class AdminEventCreateDTO {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  startsAt: number;

  @IsNumber()
  endsAt: number;
}

export class AdminEventUpdateDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  startsAt?: number;

  @IsNumber()
  @IsOptional()
  endsAt?: number;
}

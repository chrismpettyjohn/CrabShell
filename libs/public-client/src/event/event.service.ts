import { fetchFromApi } from "../client.const";
import { EventWire } from "./event.types";

export class EventsService {
  getByDate(date: string): Promise<EventWire[]> {
    return fetchFromApi(`events/${date}`);
  }
}

export const eventsService: EventsService = new EventsService();

import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminEventCreateParams,
  AdminEventCreateResponse,
  AdminEventDeleteByIdResponse,
  AdminEventGetAllResponse,
  AdminEventGetByIdResponse,
  AdminEventUpdateByIdParams,
  AdminEventUpdateByIdResponse,
} from "./event.types";

export class AdminEventService {
  public create(
    dto: AdminEventCreateParams
  ): Promise<AdminEventCreateResponse> {
    return postToApi("events", dto);
  }

  public getAll(): Promise<AdminEventGetAllResponse> {
    return fetchFromApi("events");
  }

  public getById(eventId: number): Promise<AdminEventGetByIdResponse> {
    return fetchFromApi(`events/${eventId}`);
  }

  public updateById(
    eventId: number,
    dto: AdminEventUpdateByIdParams
  ): Promise<AdminEventUpdateByIdResponse> {
    return patchToApi(`events/${eventId}`, dto);
  }

  public deleteById(eventId: number): Promise<AdminEventDeleteByIdResponse> {
    return deleteFromApi(`events/${eventId}`);
  }
}

export const adminEventService: AdminEventService = new AdminEventService();

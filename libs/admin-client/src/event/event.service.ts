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
    return postToApi("emu-texts", dto);
  }

  public getAll(): Promise<AdminEventGetAllResponse> {
    return fetchFromApi("emu-texts");
  }

  public getById(emuTextsId: string): Promise<AdminEventGetByIdResponse> {
    return fetchFromApi(`emu-texts/${emuTextsId}`);
  }

  public updateById(
    emuTextsId: string,
    dto: AdminEventUpdateByIdParams
  ): Promise<AdminEventUpdateByIdResponse> {
    return patchToApi(`emu-texts/${emuTextsId}`, dto);
  }

  public deleteById(emuTextsId: string): Promise<AdminEventDeleteByIdResponse> {
    return deleteFromApi(`emu-texts/${emuTextsId}`);
  }
}

export const adminEventService: AdminEventService = new AdminEventService();

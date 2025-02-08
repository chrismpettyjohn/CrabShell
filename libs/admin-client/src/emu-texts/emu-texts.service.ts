import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminEmuTextsCreateParams,
  AdminEmuTextsCreateResponse,
  AdminEmuTextsDeleteByKeyResponse,
  AdminEmuTextsGetAllResponse,
  AdminEmuTextsGetByKeyResponse,
  AdminEmuTextsUpdateByKeyParams,
  AdminEmuTextsUpdateByKeyResponse,
} from "./emu-texts.types";

export class AdminEmuTextsService {
  public create(
    dto: AdminEmuTextsCreateParams
  ): Promise<AdminEmuTextsCreateResponse> {
    return postToApi("emu-texts", dto);
  }

  public getAll(): Promise<AdminEmuTextsGetAllResponse> {
    return fetchFromApi("emu-texts");
  }

  public getByKey(emuTextsKey: string): Promise<AdminEmuTextsGetByKeyResponse> {
    return fetchFromApi(`emu-texts/${emuTextsKey}`);
  }

  public updateByKey(
    emuTextsKey: string,
    dto: AdminEmuTextsUpdateByKeyParams
  ): Promise<AdminEmuTextsUpdateByKeyResponse> {
    return patchToApi(`emu-texts/${emuTextsKey}`, dto);
  }

  public deleteByKey(
    emuTextsKey: string
  ): Promise<AdminEmuTextsDeleteByKeyResponse> {
    return deleteFromApi(`emu-texts/${emuTextsKey}`);
  }
}

export const adminEmuTextsService: AdminEmuTextsService =
  new AdminEmuTextsService();

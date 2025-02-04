import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminEmuTextsCreateParams,
  AdminEmuTextsCreateResponse,
  AdminEmuTextsDeleteByIdResponse,
  AdminEmuTextsGetAllResponse,
  AdminEmuTextsGetByIdResponse,
  AdminEmuTextsUpdateByIdParams,
  AdminEmuTextsUpdateByIdResponse,
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

  public getById(emuTextsId: number): Promise<AdminEmuTextsGetByIdResponse> {
    return fetchFromApi(`emu-texts/${emuTextsId}`);
  }

  public updateById(
    emuTextsId: number,
    dto: AdminEmuTextsUpdateByIdParams
  ): Promise<AdminEmuTextsUpdateByIdResponse> {
    return patchToApi(`emu-texts/${emuTextsId}`, dto);
  }

  public deleteById(
    emuTextsId: number
  ): Promise<AdminEmuTextsDeleteByIdResponse> {
    return deleteFromApi(`emu-texts/${emuTextsId}`);
  }
}

export const adminEmuTextsService: AdminEmuTextsService =
  new AdminEmuTextsService();

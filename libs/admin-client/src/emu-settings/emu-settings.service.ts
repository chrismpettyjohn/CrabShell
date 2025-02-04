import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminEmuSettingsCreateParams,
  AdminEmuSettingsCreateResponse,
  AdminEmuSettingsDeleteByIdResponse,
  AdminEmuSettingsGetAllResponse,
  AdminEmuSettingsGetByIdResponse,
  AdminEmuSettingsUpdateByIdParams,
  AdminEmuSettingsUpdateByIdResponse,
} from "./emu-settings.types";

export class AdminEmuSettingsService {
  public create(
    dto: AdminEmuSettingsCreateParams
  ): Promise<AdminEmuSettingsCreateResponse> {
    return postToApi("emu-settings", dto);
  }

  public getAll(): Promise<AdminEmuSettingsGetAllResponse> {
    return fetchFromApi("emu-settings");
  }

  public getById(
    emuSettingsId: number
  ): Promise<AdminEmuSettingsGetByIdResponse> {
    return fetchFromApi(`emu-settings/${emuSettingsId}`);
  }

  public updateById(
    emuSettingsId: number,
    dto: AdminEmuSettingsUpdateByIdParams
  ): Promise<AdminEmuSettingsUpdateByIdResponse> {
    return patchToApi(`emu-settings/${emuSettingsId}`, dto);
  }

  public deleteById(
    emuSettingsId: number
  ): Promise<AdminEmuSettingsDeleteByIdResponse> {
    return deleteFromApi(`emu-settings/${emuSettingsId}`);
  }
}

export const adminEmuSettingsService: AdminEmuSettingsService =
  new AdminEmuSettingsService();

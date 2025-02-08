import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminEmuSettingsCreateParams,
  AdminEmuSettingsCreateResponse,
  AdminEmuSettingsDeleteByKeyResponse,
  AdminEmuSettingsGetAllResponse,
  AdminEmuSettingsGetByKeyResponse,
  AdminEmuSettingsUpdateByKeyParams,
  AdminEmuSettingsUpdateByKeyResponse,
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

  public getByKey(
    emuSettingsKey: string
  ): Promise<AdminEmuSettingsGetByKeyResponse> {
    return fetchFromApi(`emu-settings/${emuSettingsKey}`);
  }

  public updateByKey(
    emuSettingsKey: string,
    dto: AdminEmuSettingsUpdateByKeyParams
  ): Promise<AdminEmuSettingsUpdateByKeyResponse> {
    return patchToApi(`emu-settings/${emuSettingsKey}`, dto);
  }

  public deleteByKey(
    emuSettingsKey: string
  ): Promise<AdminEmuSettingsDeleteByKeyResponse> {
    return deleteFromApi(`emu-settings/${emuSettingsKey}`);
  }
}

export const adminEmuSettingsService: AdminEmuSettingsService =
  new AdminEmuSettingsService();

export interface AdminEmuSettingsWire {
  key: string;
  value: string;
}
export type AdminEmuSettingsCreateParams = AdminEmuSettingsWire;
export type AdminEmuSettingsCreateResponse = AdminEmuSettingsWire;

export type AdminEmuSettingsUpdateByKeyParams = Partial<AdminEmuSettingsWire>;

export type AdminEmuSettingsUpdateByKeyResponse = boolean;

export type AdminEmuSettingsGetAllResponse = AdminEmuSettingsWire[];

export type AdminEmuSettingsGetByKeyResponse = AdminEmuSettingsWire;

export type AdminEmuSettingsDeleteByKeyResponse = boolean;

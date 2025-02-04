export interface AdminEmuSettingsWire {
  key: string;
  value: string;
}
export type AdminEmuSettingsCreateParams = AdminEmuSettingsWire;
export type AdminEmuSettingsCreateResponse = AdminEmuSettingsWire;

export type AdminEmuSettingsUpdateByIdParams = Partial<AdminEmuSettingsWire>;

export type AdminEmuSettingsUpdateByIdResponse = boolean;

export type AdminEmuSettingsGetAllResponse = AdminEmuSettingsWire[];

export type AdminEmuSettingsGetByIdResponse = AdminEmuSettingsWire;

export type AdminEmuSettingsDeleteByIdResponse = boolean;

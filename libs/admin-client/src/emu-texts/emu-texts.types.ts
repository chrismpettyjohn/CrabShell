export interface AdminEmuTextsWire {
  key: string;
  value: string;
}
export type AdminEmuTextsCreateParams = AdminEmuTextsWire;
export type AdminEmuTextsCreateResponse = AdminEmuTextsWire;

export type AdminEmuTextsUpdateByKeyParams = Partial<AdminEmuTextsWire>;

export type AdminEmuTextsUpdateByKeyResponse = boolean;

export type AdminEmuTextsGetAllResponse = AdminEmuTextsWire[];

export type AdminEmuTextsGetByKeyResponse = AdminEmuTextsWire;

export type AdminEmuTextsDeleteByKeyResponse = boolean;

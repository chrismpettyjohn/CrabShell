export interface AdminEmuTextsWire {
  key: string;
  value: string;
}
export type AdminEmuTextsCreateParams = AdminEmuTextsWire;
export type AdminEmuTextsCreateResponse = AdminEmuTextsWire;

export type AdminEmuTextsUpdateByIdParams = Partial<AdminEmuTextsWire>;

export type AdminEmuTextsUpdateByIdResponse = boolean;

export type AdminEmuTextsGetAllResponse = AdminEmuTextsWire[];

export type AdminEmuTextsGetByIdResponse = AdminEmuTextsWire;

export type AdminEmuTextsDeleteByIdResponse = boolean;

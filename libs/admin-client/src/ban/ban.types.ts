export interface AdminBanWire {
  id: number;
  userId: number;
}

export interface AdminBanCreateParams {
  userId: number;
}

export type AdminBanCreateResponse = AdminBanWire;

export type AdminBanUpdateByIdParams = Partial<AdminBanCreateParams>;

export type AdminBanUpdateByIdResponse = boolean;

export type AdminBanGetAllResponse = AdminBanWire[];

export type AdminBanGetByIdResponse = AdminBanWire;

export type AdminBanDeleteByIdResponse = boolean;

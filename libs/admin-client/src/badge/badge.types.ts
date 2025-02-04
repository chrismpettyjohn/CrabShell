export interface AdminBadgeWire {
  code: string;
  publicName: string;
}

export interface AdminBadgeCreateParams {
  code: string;
  publicName: string;
}

export type AdminBadgeCreateResponse = AdminBadgeWire;

export type AdminBadgeUpdateByCodeParams = Partial<AdminBadgeCreateParams>;

export type AdminBadgeUpdateByCodeResponse = boolean;

export type AdminBadgeGetAllResponse = AdminBadgeWire[];

export type AdminBadgeGetByCodeResponse = AdminBadgeWire;

export type AdminBadgeDeleteByCodeResponse = boolean;

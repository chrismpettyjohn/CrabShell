import { RankScope, RankWire } from "@crabshell/public-client";
export { RankScope } from "@crabshell/public-client";

export interface AdminRankWire extends RankWire {}

export interface AdminRankCreateParams {
  name: string;
  badgeCode: string;
  scopes: Record<RankScope, boolean>;
}

export type AdminRankCreateResponse = RankWire;

export type AdminRankUpdateByIdParams = Partial<AdminRankCreateParams>;

export type AdminRankUpdateByIdResponse = boolean;

export type AdminRankGetAllResponse = RankWire[];

export type AdminRankGetByIdResponse = RankWire;

export type AdminRankDeleteByIdResponse = boolean;

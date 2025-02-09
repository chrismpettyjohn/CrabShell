import { EventWire } from "@crabshell/public-client";

export interface AdminEventWire extends EventWire {}

export interface AdminEventCreateParams {
  title: string;
  content: string;
  startsAt: number;
  endsAt: number;
}

export type AdminEventCreateResponse = AdminEventWire;

export type AdminEventUpdateByIdParams = Partial<AdminEventCreateParams>;

export type AdminEventUpdateByIdResponse = boolean;

export type AdminEventGetAllResponse = AdminEventWire[];

export type AdminEventGetByIdResponse = AdminEventWire;

export type AdminEventDeleteByIdResponse = boolean;

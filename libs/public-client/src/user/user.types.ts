import { RankWire } from "../ranks/ranks.types";

export interface UserWire {
  id: number;
  username: string;
  rankID: number;
  look: string;
  motto: string;
  online: boolean;
  credits: number;
  pixels: number;
  points: number;
  rank?: RankWire;
}

export type UsersOnlineResponse = UserWire[];

export type UserByIdResponse = UserWire;

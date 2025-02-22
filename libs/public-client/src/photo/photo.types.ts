import { UserWire } from "../user/user.types";

export interface PhotoWire {
  id: number;
  userId: number;
  roomId: number;
  imageUrl: string;
  timestamp: number;
  visible: boolean;
  user: UserWire;
}

export type PhotoGetAllResponse = PhotoWire[];
export type PhotoGetByIdResponse = PhotoWire;

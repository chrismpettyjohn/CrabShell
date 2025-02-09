import { UserWire } from "../user/user.types";

export interface ArticleWire {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  user: UserWire;
}

export type ArticleGetAllResponse = ArticleWire[];
export type ArticleGetByIdResponse = ArticleWire;

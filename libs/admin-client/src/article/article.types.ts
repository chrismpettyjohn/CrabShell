import { ArticleWire } from "@crabshell/public-client";

export interface AdminArticleWire extends ArticleWire {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface AdminArticleCreateParams {
  name: string;
  imageUrl: string;
  description: string;
  content: string;
}

export type AdminArticleCreateResponse = ArticleWire;

export type AdminArticleUpdateByIdParams = Partial<AdminArticleCreateParams>;

export type AdminArticleUpdateByIdResponse = boolean;

export type AdminArticleGetAllResponse = ArticleWire[];

export type AdminArticleGetByIdResponse = ArticleWire;

export type AdminArticleDeleteByIdResponse = boolean;

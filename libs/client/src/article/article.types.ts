export interface ArticleWire {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export type ArticleGetAllResponse = ArticleWire[];
export type ArticleGetByIdResponse = ArticleWire;

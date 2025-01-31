import { fetchFromApi } from "../client.const";
import { ArticleGetAllResponse, ArticleGetByIdResponse } from "./article.types";

export class ArticleService {
  public getAll(): Promise<ArticleGetAllResponse> {
    return fetchFromApi("articles");
  }
  public getById(articleId: number): Promise<ArticleGetByIdResponse> {
    return fetchFromApi(`articles/${articleId}`);
  }
}

export const articleService: ArticleService = new ArticleService();

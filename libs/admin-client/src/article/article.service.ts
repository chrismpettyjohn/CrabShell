import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminArticleCreateParams,
  AdminArticleCreateResponse,
  AdminArticleDeleteByIdResponse,
  AdminArticleGetAllResponse,
  AdminArticleGetByIdResponse,
  AdminArticleUpdateByIdParams,
  AdminArticleUpdateByIdResponse,
} from "./article.types";

export class AdminArticleService {
  public create(
    dto: AdminArticleCreateParams
  ): Promise<AdminArticleCreateResponse> {
    return postToApi("articles", dto);
  }

  public getAll(): Promise<AdminArticleGetAllResponse> {
    return fetchFromApi("articles");
  }

  public getById(articleId: number): Promise<AdminArticleGetByIdResponse> {
    return fetchFromApi(`articles/${articleId}`);
  }

  public updateById(
    articleId: number,
    dto: AdminArticleUpdateByIdParams
  ): Promise<AdminArticleUpdateByIdResponse> {
    return patchToApi(`articles/${articleId}`, dto);
  }

  public deleteById(
    articleId: number
  ): Promise<AdminArticleDeleteByIdResponse> {
    return deleteFromApi(`articles/${articleId}`);
  }
}

export const adminArticleService: AdminArticleService =
  new AdminArticleService();

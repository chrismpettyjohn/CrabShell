import { fetchFromApi } from "../client.const";
import { PhotoGetAllResponse, PhotoGetByIdResponse } from "./photo.types";

export class PhotoService {
  public getAll(): Promise<PhotoGetAllResponse> {
    return fetchFromApi("photos");
  }
  public getById(photoId: number): Promise<PhotoGetByIdResponse> {
    return fetchFromApi(`photos/${photoId}`);
  }
}

export const photoService: PhotoService = new PhotoService();

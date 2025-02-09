import { fetchFromApi } from "../client.const";
import { FindRetrosVoteStatusResponse } from "./findretros.types";

export class FindRetrosService {
  public getVoteStatus(): Promise<FindRetrosVoteStatusResponse> {
    return fetchFromApi("findretros/status");
  }
}

export const findRetrosService: FindRetrosService = new FindRetrosService();

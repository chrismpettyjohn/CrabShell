import { fetchFromApi } from "../client.const";
import { RankWire } from "./ranks.types";

export class RanksService {
  getStaff(): Promise<RankWire[]> {
    return fetchFromApi("ranks/staff");
  }
  getById(rankId: number): Promise<RankWire> {
    return fetchFromApi(`ranks/${rankId}`);
  }
}

export const ranksService: RanksService = new RanksService();

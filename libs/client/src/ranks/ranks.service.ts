import { fetchFromApi } from "../client.const";
import { RankWire } from "./ranks.types";

export class RanksService {
  getStaff(): Promise<RankWire[]> {
    return fetchFromApi("ranks/staff");
  }
}

export const ranksService: RanksService = new RanksService();

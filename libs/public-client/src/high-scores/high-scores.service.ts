import { fetchFromApi } from "../client.const";
import {
  HighScoresByAchievementsResponse,
  HighScoresByCreditsResponse,
  HighScoresByDiamondsResponse,
  HighScoresByOnlineTimeResponse,
  HighScoresByRespectsReceivedResponse,
} from "./high-scores.types";

export class HighScoresService {
  public getByCredits(): Promise<HighScoresByCreditsResponse> {
    return fetchFromApi("high-scores/credits");
  }
  public getByDiamonds(): Promise<HighScoresByDiamondsResponse> {
    return fetchFromApi("high-scores/diamonds");
  }
  public getByOnlineTime(): Promise<HighScoresByOnlineTimeResponse> {
    return fetchFromApi("high-scores/online-time");
  }
  public getByRespectReceived(): Promise<HighScoresByRespectsReceivedResponse> {
    return fetchFromApi("high-scores/respect-received");
  }
  public getByAchievements(): Promise<HighScoresByAchievementsResponse> {
    return fetchFromApi("high-scores/achievements");
  }
}

export const highScoresService: HighScoresService = new HighScoresService();

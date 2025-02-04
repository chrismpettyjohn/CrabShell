import { fetchFromApi } from "../client.const";
import { AchievementsByUserIdResponse } from "./achievement.types";

export class AchievementsService {
  public getAchievementsByUserId(
    userId: number
  ): Promise<AchievementsByUserIdResponse> {
    return fetchFromApi(`users/${userId}/achievements`);
  }
}

export const achievementsService: AchievementsService =
  new AchievementsService();

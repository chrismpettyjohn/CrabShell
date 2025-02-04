import { fetchFromApi } from "../client.const";
import { BadgesByUserIdResponse } from "./badge.types";

export class BadgesService {
  public getBadgesByUserId(userId: number): Promise<BadgesByUserIdResponse> {
    return fetchFromApi(`users/${userId}/badges`);
  }
}

export const badgesService: BadgesService = new BadgesService();

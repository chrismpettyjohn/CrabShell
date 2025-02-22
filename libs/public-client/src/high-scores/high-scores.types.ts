export interface HighScoresByCreditsRow {
  id: number;
  username: string;
  look: string;
  credits: number;
}
export interface HighScoresByCreditsResponse {
  items: HighScoresByCreditsRow[];
}

export interface HighScoresByOnlineTimeRow {
  id: number;
  username: string;
  look: string;
  onlineTime: number;
}
export interface HighScoresByOnlineTimeResponse {
  items: HighScoresByOnlineTimeRow[];
}

export interface HighScoresByRespectsReceivedRow {
  id: number;
  username: string;
  look: string;
  respectsReceived: number;
}
export interface HighScoresByRespectsReceivedResponse {
  items: HighScoresByRespectsReceivedRow[];
}

export interface HighScoresByAchievementsRow {
  id: number;
  username: string;
  look: string;
  achievements: number;
}
export interface HighScoresByAchievementsResponse {
  items: HighScoresByAchievementsRow[];
}

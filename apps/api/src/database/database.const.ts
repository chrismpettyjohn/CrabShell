import { RankEntity } from './rank.entity';
import { UserEntity } from './user.entity';
import { GroupEntity } from './group.entity';
import { ArticleEntity } from './article.entity';
import { SessionEntity } from './session.entity';
import { UserRepository } from './user.repository';
import { RankRepository } from './rank.repository';
import { GroupRepository } from './group.repository';
import { UserBadgeEntity } from './user-badge.entity';
import { SessionRepository } from './session.repository';
import { ArticleRepository } from './article.repository';
import { UserBadgeRepository } from './user-badge.repository';
import { GroupMembershipEntity } from './group-membership.entity';
import { GroupMembershipRepository } from './group-membership.repository';
import { UserFriendshipEntity } from './user-friendship.entity';
import { UserFriendshipRepository } from './user-friendship.repository';
import { UserAchievementEntity } from './user-achievement.entity';
import { UserAchievementRepository } from './user-achievement.repository';
import { EmuTextsEntity } from './emu-texts.entity';
import { EmuSettingsRepository } from './emu-settings.repository';
import { EmuTextsRepository } from './emu-texts.repository';
import { EmuSettingsEntity } from './emu-settings.entity';
export const databaseEntities = [
  ArticleEntity,
  RankEntity,
  SessionEntity,
  UserEntity,
  GroupEntity,
  GroupMembershipEntity,
  UserBadgeEntity,
  UserFriendshipEntity,
  UserAchievementEntity,
  EmuSettingsEntity,
  EmuTextsEntity,
];

export const databaseRepositories = [
  RankRepository,
  SessionRepository,
  UserRepository,
  ArticleRepository,
  GroupRepository,
  GroupMembershipRepository,
  UserBadgeRepository,
  UserFriendshipRepository,
  UserAchievementRepository,
  EmuSettingsRepository,
  EmuTextsRepository,
];

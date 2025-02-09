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
import { ItemBaseEntity } from './items-base.entity';
import { ItemBaseRepository } from './items-base.repository';
import { UserCommandLogEntity } from './user-command-log.entity';
import { UserCommandLogRepository } from './user-command-log.repository';
import { UserNameChangeLogEntity } from './user-name-change-log.entity';
import { UserNameChangeLogRepository } from './user-name-change-log.repository';
import { UserTradeLogEntity } from './user-trade-log.entity';
import { UserTradeLogRepository } from './user-trade-log.repository';
import { UserRoomEnterLogEntity } from './user-room-enter-log.entity';
import { UserRoomEnterLogRepository } from './user-room-enter-log.repository';
import { UserPublicMessageLogEntity } from './user-public-message-log.entity';
import { UserPublicMessageLogRepository } from './user-public-message-log.repository';
import { UserPrivateMessageLogEntity } from './user-private-message-log.entity';
import { UserPrivateMessageLogRepository } from './user-private-message-log.repository';
import { CatalogPageEntity } from './catalog-page.entity';
import { CatalogPageRepository } from './catalog-page.repository';
import { CatalogItemEntity } from './catalog-item.entity';
import { CatalogItemRepository } from './catalog-item.repository';

export const databaseEntities = [
  ArticleEntity,
  RankEntity,
  SessionEntity,
  UserEntity,
  UserTradeLogEntity,
  UserCommandLogEntity,
  UserRoomEnterLogEntity,
  UserNameChangeLogEntity,
  UserPublicMessageLogEntity,
  UserPrivateMessageLogEntity,
  GroupEntity,
  GroupMembershipEntity,
  UserBadgeEntity,
  UserFriendshipEntity,
  UserAchievementEntity,
  EmuSettingsEntity,
  EmuTextsEntity,
  ItemBaseEntity,
  CatalogPageEntity,
  CatalogItemEntity,
];

export const databaseRepositories = [
  RankRepository,
  SessionRepository,
  UserRepository,
  UserTradeLogRepository,
  UserCommandLogRepository,
  UserRoomEnterLogRepository,
  UserNameChangeLogRepository,
  UserPublicMessageLogRepository,
  UserPrivateMessageLogRepository,
  ArticleRepository,
  GroupRepository,
  GroupMembershipRepository,
  UserBadgeRepository,
  UserFriendshipRepository,
  UserAchievementRepository,
  EmuSettingsRepository,
  EmuTextsRepository,
  ItemBaseRepository,
  CatalogPageRepository,
  CatalogItemRepository,
];

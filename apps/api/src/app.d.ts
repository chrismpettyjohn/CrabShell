import { UserEntity } from './database/user.entity';
import { RankEntity } from './database/rank.entity';
import { SessionEntity } from './database/session.entity';

export interface AuthenticatedUser {
  session: SessionEntity;
  user: UserEntity;
  rank: RankEntity?;
}

export interface Request extends Request {
  auth?: AuthenticatedUser;
}

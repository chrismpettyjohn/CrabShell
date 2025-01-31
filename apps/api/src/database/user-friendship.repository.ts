import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { UserFriendshipEntity } from './user-friendship.entity';

@Injectable()
export class UserFriendshipRepository extends BaseRepository<UserFriendshipEntity> {
  constructor(
    @InjectRepository(UserFriendshipEntity)
    userFriendshipRepo: Repository<UserFriendshipEntity>,
  ) {
    super(userFriendshipRepo);
  }
}

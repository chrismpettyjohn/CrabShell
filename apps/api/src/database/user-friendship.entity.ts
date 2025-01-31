import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messenger_friendships')
export class UserFriendshipEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_one_id' })
  userOneID!: number;

  @Column({ name: 'user_two_id' })
  userTwoID!: number;

  @Column({ name: 'relation' })
  friendType!: number;

  @Column({ name: 'friends_since' })
  createdAt!: number;
}

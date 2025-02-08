import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messenger_friendships')
export class UserFriendshipEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_one_id', type: 'int' })
  userOneID!: number;

  @Column({ name: 'user_two_id', type: 'int' })
  userTwoID!: number;

  @Column({ name: 'relation', type: 'int' })
  friendType!: number;

  @Column({ name: 'friends_since', type: 'int' })
  createdAt!: number;
}

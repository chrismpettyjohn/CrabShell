import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guilds_members')
export class GroupMembershipEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'guild_id', type: 'int' })
  groupID!: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @Column({ name: 'level_id', type: 'int' })
  levelID!: number;

  @Column({ name: 'member_since', type: 'int' })
  createdAt!: number;
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupEntity } from './group.entity';
import { UserEntity } from './user.entity';

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

  @ManyToOne(() => UserEntity, (user) => user.groupMemberships)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => GroupEntity, (guild) => guild.members)
  @JoinColumn({ name: 'guild_id' })
  guild: GroupEntity;
}

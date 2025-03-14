import { GroupMembershipEntity } from './group-membership.entity';
import { UserEntity } from './user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity('guilds')
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'name', type: 'varchar' })
  name!: string;

  @Column({ name: 'badge', type: 'varchar' })
  badge!: string;

  @Column({ name: 'description', type: 'text' })
  description!: string;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @Column({ name: 'room_id', type: 'int' })
  roomID!: number;

  @Column({ name: 'date_created', type: 'int' })
  createdAt!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @OneToMany(() => GroupMembershipEntity, (guildMember) => guildMember.guild)
  members: GroupMembershipEntity[];
}

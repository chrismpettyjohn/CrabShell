import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  USER_DEFAULT_CREDITS,
  USER_DEFAULT_DUCKETS,
  USER_DEFAULT_HOME_ROOM,
  USER_DEFAULT_LOOK,
  USER_DEFAULT_MOTTO,
  USER_DEFAULT_POINTS,
} from '../app.const';
import { RankEntity } from './rank.entity';
import { UserCommandLogEntity } from './user-command-log.entity';
import { GroupEntity } from './group.entity';
import { GroupMembershipEntity } from './group-membership.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'username', type: 'varchar', unique: true })
  username!: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'mail', type: 'varchar' })
  email: string;

  @Column({ name: 'auth_ticket', type: 'varchar' })
  gameSSO: string;

  @Column({ name: 'rank', type: 'int' })
  rankID: number = 1;

  @Column({ name: 'credits', type: 'int' })
  credits: number = USER_DEFAULT_CREDITS;

  @Column({ name: 'points', type: 'int' })
  vipPoints: number = USER_DEFAULT_POINTS;

  @Column({ name: 'pixels', type: 'int' })
  activityPoints: number = USER_DEFAULT_DUCKETS;

  @Column({ name: 'look', type: 'varchar' })
  look: string = USER_DEFAULT_LOOK;

  @Column({ type: 'int' })
  gender!: number;

  @Column({ name: 'motto', type: 'varchar' })
  motto: string = USER_DEFAULT_MOTTO;

  @Column({ name: 'account_created', type: 'int' })
  accountCreatedAt!: number;

  @Column({ name: 'online', type: 'tinyint' })
  onlineStatus: '0' | '1';

  @Column({ name: 'last_online', type: 'int' })
  lastOnlineAt!: number;

  @Column({ name: 'ip_current', type: 'varchar' })
  ipLast!: string;

  @Column({ name: 'ip_register', type: 'varchar' })
  ipRegistered!: string;

  @Column({ name: 'machine_id', nullable: true, type: 'varchar' })
  machineAddress?: string;

  @Column({ name: 'home_room', type: 'int' })
  homeRoomID: number = USER_DEFAULT_HOME_ROOM;

  @ManyToOne(() => RankEntity, (rank) => rank.members)
  @JoinColumn({ name: 'rank' })
  rank?: RankEntity;

  @OneToMany(() => UserCommandLogEntity, (commandLog) => commandLog.user)
  commandLogs?: UserCommandLogEntity[];

  @ManyToMany(
    () => GroupMembershipEntity,
    (groupMembership) => groupMembership.user,
  )
  @JoinTable()
  groupMemberships?: GroupMembershipEntity[];
}

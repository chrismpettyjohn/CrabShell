import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  USER_DEFAULT_CREDITS,
  USER_DEFAULT_DUCKETS,
  USER_DEFAULT_HOME_ROOM,
  USER_DEFAULT_LOOK,
  USER_DEFAULT_MOTTO,
  USER_DEFAULT_POINTS,
} from '../app.const';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ name: 'mail', nullable: true })
  email?: string;

  @Column({ name: 'auth_ticket', nullable: true })
  gameSSO?: string;

  @Column({ name: 'rank', type: 'int' })
  rankID: number = 1;

  @Column()
  credits: number = USER_DEFAULT_CREDITS;

  @Column({ name: 'points' })
  vipPoints: number = USER_DEFAULT_POINTS;

  @Column({ name: 'pixels' })
  activityPoints: number = USER_DEFAULT_DUCKETS;

  @Column()
  look: string = USER_DEFAULT_LOOK;

  @Column({ type: 'int' })
  gender!: number;

  @Column()
  motto: string = USER_DEFAULT_MOTTO;

  @Column({ name: 'account_created' })
  accountCreatedAt!: number;

  @Column({ name: 'online', type: 'int' })
  onlineStatus: number;

  @Column({ name: 'last_online' })
  lastOnlineAt!: number;

  @Column({ name: 'ip_current' })
  ipLast!: string;

  @Column({ name: 'ip_register' })
  ipRegistered!: string;

  @Column({ name: 'machine_id', nullable: true })
  machineAddress?: string;

  @Column({ name: 'home_room' })
  homeRoomID: number = USER_DEFAULT_HOME_ROOM;
}

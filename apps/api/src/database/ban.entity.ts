import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('bans')
export class BanEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column({ name: 'user_id', type: 'int' })
  userId!: number;

  @Column({ name: 'ip', type: 'varchar', length: 50 })
  ip!: string;

  @Column({ name: 'machine_id', type: 'varchar', length: 255 })
  machineId!: string;

  @Column({ name: 'user_staff_id', type: 'int' })
  userStaffId!: number;

  @Column({ name: 'timestamp', type: 'int' })
  timestamp!: number;

  @Column({ name: 'ban_expire', type: 'int' })
  banExpire!: number;

  @Column({ name: 'ban_reason', type: 'varchar', length: 200 })
  banReason!: string;

  @Column({ name: 'type', type: 'enum', enum: ['temporary', 'permanent'] })
  type!: 'temporary' | 'permanent';

  @Column({ name: 'cfh_topic', type: 'int' })
  cfhTopic!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}

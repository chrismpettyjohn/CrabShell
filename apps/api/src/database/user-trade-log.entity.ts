import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('room_trade_log')
export class UserTradeLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_one_id', type: 'int' })
  userOneId!: number;

  @Column({ name: 'user_one_ip', type: 'varchar', length: 45 })
  userOneIpAddress!: number;

  @Column({ name: 'user_one_item', type: 'int' })
  userOneItemId!: number;

  @Column({ name: 'user_two_id', type: 'int' })
  userTwoId!: number;

  @Column({ name: 'user_two_ip', type: 'varchar', length: 45 })
  userTwoIpAddress!: number;

  @Column({ name: 'user_two_item', type: 'int' })
  userTwoItemId!: number;

  @Column({ name: 'timestamp', type: 'int' })
  timestamp!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_one_id' })
  userOne?: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_two_id' })
  userTwo?: UserEntity;
}

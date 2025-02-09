import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('room_enter_log')
export class UserRoomEnterLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'room_id', type: 'int' })
  roomID!: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @Column({ name: 'timestamp', type: 'int' })
  enteredAt!: number;

  @Column({ name: 'exit_timestamp', type: 'int' })
  leftAt!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}

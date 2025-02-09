import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('chatlogs_private')
export class UserPrivateMessageLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_from_id', type: 'int' })
  userID!: number;

  @Column({ name: 'user_to_id', type: 'int' })
  sentToUserID!: number;

  @Column({ name: 'message', type: 'varchar', length: 255 })
  message!: string;

  @Column({ name: 'timestamp', type: 'int' })
  timestamp!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_from_id' })
  user?: UserEntity;
}

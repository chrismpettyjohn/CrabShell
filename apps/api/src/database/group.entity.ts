import { UserEntity } from './user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('guilds')
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  badge!: string;

  @Column()
  description!: string;

  @Column({ name: 'user_id' })
  userID!: number;

  @Column({ name: 'room_id' })
  roomID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}

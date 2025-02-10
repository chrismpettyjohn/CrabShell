import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('crabshell_events')
export class EventEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column({ name: 'user_id', type: 'int' })
  userId!: number;

  @Column({ name: 'title', type: 'varchar' })
  title!: string;

  @Column({ name: 'content', type: 'text' })
  content!: string;

  @Column({ name: 'starts_at', type: 'int' })
  startsAt!: number;

  @Column({ name: 'ends_at', type: 'int' })
  endsAt!: number;

  @Column({ name: 'created_at', type: 'int' })
  createdAt!: number;

  @Column({ name: 'updated_at', type: 'int' })
  updatedAt!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}

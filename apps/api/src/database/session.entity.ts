import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('crab_sessions')
export class SessionEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @CreateDateColumn({ name: 'created_at', type: 'int' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'int' })
  updatedAt?: string;
}

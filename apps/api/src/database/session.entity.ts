import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('imagine_sessions')
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_id' })
  userID!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;
}

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('crab_articles')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_id', type: 'int' })
  userId!: number;

  @Column({ name: 'name', type: 'varchar' })
  name!: string;

  @Column({ name: 'description', type: 'varchar' })
  description!: string;

  @Column({ name: 'content', type: 'text' })
  content!: string;

  @Column({ name: 'image_url', type: 'varchar' })
  imageUrl!: string;

  @CreateDateColumn({ name: 'created_at', type: 'int' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'int' })
  updatedAt?: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}

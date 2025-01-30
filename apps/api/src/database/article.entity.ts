import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('imagine_articles')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_id' })
  userID!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  content!: string;

  @Column({ name: 'image_url' })
  imageURL!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;
}

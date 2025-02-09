import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ name: 'starts_at', type: 'timestamp' })
  startsAt!: number;

  @Column({ name: 'ends_at', type: 'timestamp' })
  endsAt!: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt!: number;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: number;
}

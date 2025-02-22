import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

export enum PhotoVisibility {
  Visible = 1,
  NotVisible = 0,
}
@Entity('camera_web')
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_id', type: 'int' })
  userId!: number;

  @Column({ name: 'room_id', type: 'int' })
  roomId!: number;

  @Column({ name: 'timestamp', type: 'int' })
  timestamp!: number;

  @Column({ name: 'url', type: 'varchar' })
  imageUrl!: string;

  @Column({ name: 'visible', type: 'tinyint' })
  visible!: PhotoVisibility;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}

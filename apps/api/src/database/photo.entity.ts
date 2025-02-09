import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  url!: string;

  @Column({ name: 'visible', type: 'tinyint' })
  visible!: PhotoVisibility;
}

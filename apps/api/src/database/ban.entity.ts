import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bans')
export class BanEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column({ name: 'user_id', type: 'int' })
  userId!: number;
}

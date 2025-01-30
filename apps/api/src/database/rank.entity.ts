import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permissions')
export class RankEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'rank_name' })
  name!: string;

  @Column({ name: 'badge' })
  badgeCode!: string;
}

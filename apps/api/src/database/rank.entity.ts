import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

export type RankBoolean = '1' | '0';

@Entity('permissions')
export class RankEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'rank_name' })
  name!: string;

  @Column({ name: 'badge' })
  badgeCode!: string;

  @Column({ name: 'cms_show_staff' })
  showStaff!: RankBoolean;

  @OneToMany(() => UserEntity, (user) => user.rank)
  members?: UserEntity[];
}

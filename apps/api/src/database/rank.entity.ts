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

  @Column({ name: 'cms_admin_panel' })
  accessAdminPanel: RankBoolean;

  @Column({ name: 'cms_manage_articles' })
  manageArticles: RankBoolean;

  @Column({ name: 'cms_manage_badges' })
  manageBadges: RankBoolean;

  @Column({ name: 'cms_manage_emu' })
  manageEmu: RankBoolean;

  @Column({ name: 'cms_manage_ranks' })
  manageRanks: RankBoolean;

  @Column({ name: 'cms_manage_furniture' })
  manageFurniture: RankBoolean;

  @Column({ name: 'cms_manage_logs' })
  manageLogs: RankBoolean;

  @Column({ name: 'cms_manage_users' })
  manageUsers: RankBoolean;

  @OneToMany(() => UserEntity, (user) => user.rank)
  members?: UserEntity[];
}

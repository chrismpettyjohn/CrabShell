import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

export enum RankBoolean {
  False = '0',
  True = '1',
}

@Entity('permissions')
export class RankEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column({ name: 'rank_name', type: 'varchar' })
  name!: string;

  @Column({ name: 'badge', type: 'varchar' })
  badgeCode!: string;

  @Column({ name: 'cms_show_staff', type: 'enum', enum: RankBoolean })
  showStaff!: RankBoolean;

  @Column({ name: 'cms_admin_panel', type: 'enum', enum: RankBoolean })
  accessAdminPanel: RankBoolean;

  @Column({ name: 'cms_manage_articles', type: 'enum', enum: RankBoolean })
  manageArticles: RankBoolean;

  @Column({ name: 'cms_manage_badges', type: 'enum', enum: RankBoolean })
  manageBadges: RankBoolean;

  @Column({ name: 'cms_manage_emu', type: 'enum', enum: RankBoolean })
  manageEmu: RankBoolean;

  @Column({ name: 'cms_manage_ranks', type: 'enum', enum: RankBoolean })
  manageRanks: RankBoolean;

  @Column({ name: 'cms_manage_furniture', type: 'enum', enum: RankBoolean })
  manageFurniture: RankBoolean;

  @Column({ name: 'cms_manage_catalog', type: 'enum', enum: RankBoolean })
  manageCatalog: RankBoolean;

  @Column({ name: 'cms_manage_logs', type: 'enum', enum: RankBoolean })
  manageLogs: RankBoolean;

  @Column({ name: 'cms_manage_users', type: 'enum', enum: RankBoolean })
  manageUsers: RankBoolean;

  @Column({ name: 'cms_manage_bans', type: 'enum', enum: RankBoolean })
  manageBans: RankBoolean;

  @OneToMany(() => UserEntity, (user) => user.rank)
  members?: UserEntity[];
}

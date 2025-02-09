import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum CatalogVisibility {
  Visible = '1',
  Hidden = '0',
}

@Entity('catalog_pages')
export class CatalogPageEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column({ name: 'parent_id', type: 'int', nullable: true })
  parentId?: number;

  @Column({ name: 'caption_save', type: 'varchar', length: 25, nullable: true })
  captionSave?: string;

  @Column({ name: 'caption', type: 'varchar', length: 128, nullable: true })
  publicName?: string;

  @Column({
    name: 'page_layout',
    type: 'enum',
    enum: ['value1', 'value2'],
    nullable: true,
  })
  pageLayout?: string;

  @Column({ name: 'icon_color', type: 'int', nullable: true })
  iconColor?: number;

  @Column({ name: 'icon_image', type: 'int', nullable: true })
  iconImage?: number;

  @Column({ name: 'min_rank', type: 'int', nullable: true })
  minRank?: number;

  @Column({ name: 'order_num', type: 'int', nullable: true })
  orderNum?: number;

  @Column({
    name: 'visible',
    type: 'enum',
    enum: CatalogVisibility,
    nullable: true,
  })
  visible?: CatalogVisibility;

  @Column({
    name: 'enabled',
    type: 'enum',
    enum: CatalogVisibility,
    nullable: true,
  })
  enabled?: CatalogVisibility;

  @Column({
    name: 'club_only',
    type: 'enum',
    enum: CatalogVisibility,
    nullable: true,
  })
  clubOnly?: CatalogVisibility;

  @Column({
    name: 'vip_only',
    type: 'enum',
    enum: CatalogVisibility,
    nullable: true,
  })
  vipOnly?: CatalogVisibility;

  @Column({
    name: 'page_headline',
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  pageHeadline?: string;

  @Column({ name: 'page_teaser', type: 'varchar', length: 64, nullable: true })
  pageTeaser?: string;

  @Column({
    name: 'page_special',
    type: 'varchar',
    length: 2048,
    nullable: true,
  })
  pageSpecial?: string;

  @Column({ name: 'page_text1', type: 'text', nullable: true })
  pageText1?: string;

  @Column({ name: 'page_text2', type: 'text', nullable: true })
  pageText2?: string;

  @Column({ name: 'page_text_details', type: 'text', nullable: true })
  pageTextDetails?: string;

  @Column({ name: 'page_text_teaser', type: 'text', nullable: true })
  pageTextTeaser?: string;

  @Column({ name: 'room_id', type: 'int', nullable: true })
  roomId?: number;

  @Column({ name: 'includes', type: 'varchar', length: 128, nullable: true })
  includes?: string;
}

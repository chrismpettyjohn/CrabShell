import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalog_items')
export class CatalogItemEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column({ name: 'item_ids', type: 'varchar', length: 666, nullable: true })
  itemIds?: string;

  @Column({ name: 'page_id', type: 'int', nullable: true })
  pageId?: number;

  @Column({
    name: 'catalog_name',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  catalogName?: string;

  @Column({ name: 'cost_credits', type: 'int', nullable: true })
  costCredits?: number;

  @Column({ name: 'cost_points', type: 'int', nullable: true })
  costPoints?: number;

  @Column({ name: 'points_type', type: 'int', nullable: true })
  pointsType?: number;

  @Column({ name: 'amount', type: 'int', nullable: true })
  amount?: number;

  @Column({ name: 'limited_stack', type: 'int', nullable: true })
  limitedStack?: number;

  @Column({ name: 'limited_sells', type: 'int', nullable: true })
  limitedSells?: number;

  @Column({ name: 'order_number', type: 'int', nullable: true })
  orderNumber?: number;

  @Column({ name: 'offer_id', type: 'int', nullable: true })
  offerId?: number;

  @Column({ name: 'song_id', type: 'int', nullable: true })
  songId?: number;

  @Column({ name: 'extradata', type: 'varchar', length: 500, nullable: true })
  extradata?: string;

  @Column({
    name: 'have_offer',
    type: 'enum',
    enum: ['0', '1'],
    nullable: true,
  })
  haveOffer?: string;

  @Column({ name: 'club_only', type: 'enum', enum: ['0', '1'], nullable: true })
  clubOnly?: string;
}

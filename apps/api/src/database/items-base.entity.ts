import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('items_base')
export class ItemBaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ name: 'sprite_id', type: 'int' })
  spriteId!: number;

  @Column({ name: 'public_name', length: 56 })
  publicName!: string;

  @Column({ name: 'item_name', length: 70 })
  itemName!: string;

  @Column({ length: 3 })
  type!: string;

  @Column({ type: 'int' })
  width!: number;

  @Column({ type: 'int' })
  length!: number;

  @Column({ name: 'stack_height', type: 'double', precision: 4, scale: 2 })
  stackHeight!: number;

  @Column({ name: 'allow_stack', type: 'tinyint' })
  allowStack!: boolean;

  @Column({ name: 'allow_sit', type: 'tinyint' })
  allowSit!: boolean;

  @Column({ name: 'allow_lay', type: 'tinyint' })
  allowLay!: boolean;

  @Column({ name: 'allow_walk', type: 'tinyint' })
  allowWalk!: boolean;

  @Column({ name: 'allow_gift', type: 'tinyint' })
  allowGift!: boolean;

  @Column({ name: 'allow_trade', type: 'tinyint' })
  allowTrade!: boolean;

  @Column({ name: 'allow_recycle', type: 'tinyint' })
  allowRecycle!: boolean;

  @Column({ name: 'allow_marketplace_sell', type: 'tinyint' })
  allowMarketplaceSell!: boolean;

  @Column({ name: 'allow_inventory_stack', type: 'tinyint' })
  allowInventoryStack!: boolean;

  @Column({ name: 'interaction_type', length: 500 })
  interactionType!: string;

  @Column({ name: 'interaction_modes_count', type: 'int' })
  interactionModesCount!: number;

  @Column({ name: 'vending_ids', length: 255 })
  vendingIds!: string;

  @Column({ length: 50 })
  multiheight!: string;

  @Column({ name: 'customparams', length: 256 })
  customParams!: string;

  @Column({ name: 'effect_id_male', type: 'int' })
  effectIdMale!: number;

  @Column({ name: 'effect_id_female', type: 'int' })
  effectIdFemale!: number;

  @Column({ name: 'clothing_on_walk', length: 255 })
  clothingOnWalk!: string;
}

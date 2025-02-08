import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_badges')
export class UserBadgeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @Column({ name: 'slot_id', type: 'int' })
  slotID!: number;

  @Column({ name: 'badge_code', type: 'varchar' })
  badgeCode!: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_achievements')
export class UserAchievementEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id' })
  userID!: number;

  @Column({ name: 'achievement_name' })
  achievementName!: number;
}

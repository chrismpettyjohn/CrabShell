import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('namechange_log')
export class UserNameChangeLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @Column({ name: 'old_name', type: 'varchar', length: 32 })
  oldName!: string;

  @Column({ name: 'new_name', type: 'varchar', length: 32 })
  newName!: string;

  @Column({ name: 'timestamp', type: 'int' })
  timestamp!: number;

  @ManyToOne(() => UserEntity, (user) => user.commandLogs)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}

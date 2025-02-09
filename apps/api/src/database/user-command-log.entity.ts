import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

export enum UserChatlogResult {
  Success = 'yes',
  Failure = 'no',
}

@Entity('commandlogs')
export class UserCommandLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @Column({ name: 'timestamp', type: 'int' })
  timestamp!: number;

  @Column({ name: 'command', type: 'varchar', length: 255 })
  command!: string;

  @Column({ name: 'params', type: 'varchar', length: 255 })
  params!: string;

  @Column({ name: 'succes', type: 'enum', enum: UserChatlogResult })
  result!: UserChatlogResult;

  @ManyToOne(() => UserEntity, (user) => user.commandLogs)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}

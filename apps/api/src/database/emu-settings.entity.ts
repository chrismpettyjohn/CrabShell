import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('emulator_settings')
export class EmuSettingsEntity {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}

import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('emulator_settings')
export class EmuSettingsEntity {
  @PrimaryColumn({ name: 'key', type: 'varchar' })
  key!: string;

  @Column({ name: 'value', type: 'varchar' })
  value!: string;
}

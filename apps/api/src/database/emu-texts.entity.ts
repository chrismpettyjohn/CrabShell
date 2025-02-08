import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('emulator_texts')
export class EmuTextsEntity {
  @PrimaryColumn({ name: 'key', type: 'varchar' })
  key!: string;

  @Column({ name: 'value', type: 'varchar' })
  value!: string;
}

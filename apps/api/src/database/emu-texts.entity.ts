import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('emulator_texts')
export class EmuTextsEntity {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}

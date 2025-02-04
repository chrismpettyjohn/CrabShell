import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EmuTextsPipe } from './emu-texts.pipe';
import { EmuTextsAdminController } from './emu-texts-admin.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [EmuTextsAdminController],
  providers: [EmuTextsPipe],
  exports: [EmuTextsPipe],
})
export class EmuTextsModule {}

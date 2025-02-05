import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EmuTextsPipe } from './emu-texts.pipe';
import { EmuTextsAdminController } from './emu-texts-admin.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [EmuTextsAdminController],
  providers: [EmuTextsPipe],
  exports: [EmuTextsPipe],
})
export class EmuTextsModule {}

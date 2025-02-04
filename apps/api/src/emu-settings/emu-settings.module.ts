import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EmuSettingsPipe } from './emu-settings.pipe';
import { EmuSettingsAdminController } from './emu-settings-admin.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [EmuSettingsAdminController],
  providers: [EmuSettingsPipe],
  exports: [EmuSettingsPipe],
})
export class EmuSettingsModule {}

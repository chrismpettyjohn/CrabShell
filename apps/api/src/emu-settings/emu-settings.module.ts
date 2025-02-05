import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EmuSettingsPipe } from './emu-settings.pipe';
import { EmuSettingsAdminController } from './emu-settings-admin.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [EmuSettingsAdminController],
  providers: [EmuSettingsPipe],
  exports: [EmuSettingsPipe],
})
export class EmuSettingsModule {}

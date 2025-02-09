import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { PhotoPipe } from './photo.pipe';
import { PhotoController } from './photo.controller';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [PhotoController],
  providers: [PhotoPipe],
  exports: [PhotoPipe],
})
export class PhotoModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from './app.const';
import { databaseEntities } from './database/database.const';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { ArticleModule } from './article/article.module';
import { HighScoresModule } from './high-scores/high-scores.module';
import { RankModule } from './rank/rank.module';
import { EmuSettingsModule } from './emu-settings/emu-settings.module';
import { EmuTextsModule } from './emu-texts/emu-texts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      username: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
      entities: databaseEntities,
      synchronize: false,
    }),
    ArticleModule,
    AuthModule,
    DatabaseModule,
    UserModule,
    GroupModule,
    HighScoresModule,
    RankModule,
    EmuSettingsModule,
    EmuTextsModule,
  ],
})
export class AppModule {}

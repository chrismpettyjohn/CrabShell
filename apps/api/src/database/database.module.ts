import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseEntities, databaseRepositories } from './database.const';

@Module({
  imports: [TypeOrmModule.forFeature([...databaseEntities])],
  providers: [...databaseRepositories],
  exports: [...databaseRepositories, TypeOrmModule],
})
export class DatabaseModule {}

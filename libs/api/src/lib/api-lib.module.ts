import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchesModule } from './matches/matches.module';
import { ClubsModule } from './clubs/clubs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'derby_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ClubsModule,
    MatchesModule,
  ],
})
export class ApiLibModule {}

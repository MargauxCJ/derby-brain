// apps/api/src/db/seeds/run-seed.ts
import { DataSource } from 'typeorm';
import { Club, Member, Team, User } from '@derby-brain/api-lib';
import { runSeeder } from './run';
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'derby_brain',
  entities: [Club, User, Team, Member],
  synchronize: false,
});

AppDataSource.initialize()
  .then(async (dataSource) => {
    await runSeeder(dataSource);
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error during seeding:', error);
    process.exit(1);
  });

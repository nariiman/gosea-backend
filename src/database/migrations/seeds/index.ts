import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../../app.module'; // adjust path as needed
import { DataSource } from 'typeorm';

import { seedDestinations } from './seed-destinations';
import { seedActivities } from './seed-activities';
import { seedYachts } from './seed-yachts';
import { seedCaterings } from './seed-caterings';

async function runSeeders() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource); // already initialized by Nest

  await seedDestinations(dataSource);
  await seedActivities(dataSource);
  await seedYachts(dataSource);
  await seedCaterings(dataSource);

  await app.close();
  console.log('🌱 Seeding complete');
}

runSeeders().catch((err) => {
  console.error('❌ Seeding failed', err);
});

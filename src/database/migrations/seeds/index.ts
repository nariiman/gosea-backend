import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../../app.module';
import { DataSource } from 'typeorm';

import { seedDestinations } from './seed-destinations';
import { seedActivities } from './seed-activities';
import { seedYachts } from './seed-yachts';
import { seedCaterings } from './seed-caterings';

async function runSeeders() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  // ✅ Step 1: Clear dependent tables first
  await dataSource.getRepository('booking').delete({});
  await dataSource.getRepository('activity').delete({});
  await dataSource.getRepository('yacht').delete({});
  await dataSource.getRepository('catering').delete({});

  // ✅ Step 2: Then delete destinations
  await dataSource.getRepository('destinations').delete({});

  // ✅ Step 3: Seed in correct order
  await seedDestinations(dataSource);
  await seedCaterings(dataSource);
  await seedYachts(dataSource);
  await seedActivities(dataSource);

  await app.close();
  console.log('🌱 Seeding complete');
}

runSeeders().catch((err) => {
  console.error('❌ Seeding failed', err);
});

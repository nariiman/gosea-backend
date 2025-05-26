import { DataSource } from 'typeorm';
import { Activity } from '../../../entities/Activity';

export async function seedActivities(dataSource: DataSource) {
  const repo = dataSource.getRepository(Activity);

  await dataSource.query(`TRUNCATE TABLE "activity" RESTART IDENTITY CASCADE`);
  const activitiesSeed = [
    {
      name: 'Sea Kayaking',
      activityType: 'Kayaking',
      pricePerHour: 475.66,
      createdAt: '2025-02-10T16:29:42',
      updatedAt: '2025-03-30T20:34:31',
      deletedAt: null,
      pics: 'https://www.muchbetteradventures.com/magazine/sea-kayaking-beginners-guide/',
      destinationId: 4,
      minAge: 15,
      rating: 3.7,
      reviewCount: 48,
      durationOptions: ['30', '60', '90'],
      durationUnit: 15,
      description: 'Paddle through serene waters and explore coastal beauty.',
    },
    {
      name: 'Parasailing Adventure',
      activityType: 'Parasailing',
      pricePerHour: 462.15,
      createdAt: '2025-04-01T10:50:14',
      updatedAt: '2025-01-31T08:26:18',
      deletedAt: null,
      pics: 'https://www.vallarta-adventures.com/en/blog/the-best-way-to-go-parasailing-in-puerto-vallarta',
      destinationId: 3,
      minAge: 7,
      rating: 3.9,
      reviewCount: 90,
      durationOptions: ['30', '60', '90'],
      durationUnit: 15,
      description: 'Experience the thrill of soaring above the sea.',
    },
    {
      name: 'Scuba Diving Expedition',
      activityType: 'Scuba Diving',
      pricePerHour: 553.83,
      createdAt: '2025-05-08T14:07:57',
      updatedAt: '2025-04-14T18:34:06',
      deletedAt: null,
      pics: 'https://www.scubaland.com/discover-scuba-diving',
      destinationId: 4,
      minAge: 18,
      rating: 4.5,
      reviewCount: 87,
      durationOptions: ['30', '60', '90'],
      durationUnit: 15,
      description: 'Dive into the depths and discover marine wonders.',
    },
    {
      name: 'Snorkeling Safari',
      activityType: 'Snorkeling',
      pricePerHour: 835.03,
      createdAt: '2025-02-16T22:20:41',
      updatedAt: '2025-05-13T08:10:04',
      deletedAt: null,
      pics: 'https://www.zipline.com/blog/top-5-maui-snorkeling-spots/',
      destinationId: 4,
      minAge: 10,
      rating: 4.5,
      reviewCount: 81,
      durationOptions: ['30', '60', '90'],
      durationUnit: 15,
      description: 'Explore vibrant coral reefs and marine life.',
    },
    {
      name: 'Jet Ski Thrill Ride',
      activityType: 'Jet Ski',
      pricePerHour: 761.68,
      createdAt: '2025-04-14T08:55:00',
      updatedAt: '2025-03-30T01:23:40',
      deletedAt: null,
      pics: 'https://www.adrenaline.com.au/jet-ski/darwin/darwin-jet-ski-tour-1-hour/',
      destinationId: 5,
      minAge: 10,
      rating: 4.2,
      reviewCount: 182,
      durationOptions: ['30', '60', '90'],
      durationUnit: 15,
      description: 'Speed across the waves for an adrenaline rush.',
    },
    // Add more activities as needed
  ];

  await repo.save(activitiesSeed);
  console.log('✅ Activities seeded');
}

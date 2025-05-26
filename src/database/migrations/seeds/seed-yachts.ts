import { DataSource } from 'typeorm';
import { Yacht } from '../../../entities/Yacht';

export async function seedYachts(dataSource: DataSource) {
  const repo = dataSource.getRepository(Yacht);

  await dataSource.query(`TRUNCATE TABLE "yacht" RESTART IDENTITY CASCADE`);
  const yachtsSeed = [
    {
      name: 'Silver Yacht',
      yachtType: 'Luxury',
      pricePerHour: '4984.33',
      createdAt: new Date('2025-03-07T01:30:32'),
      updatedAt: new Date('2025-03-13T23:41:55'),
      deletedAt: null,
      pics: 'https://www.charterworld.com/news/shellshock-designs-stirling-designs-shortlisted-iya-award-2015-motor-yacht-galaxy/luxury-motor-yacht-galaxy-photo-by-jeff-brown',
      destinationId: 3,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery: JSON.stringify([
        'https://www.charterworld.com/news/shellshock-designs-stirling-designs-shortlisted-iya-award-2015-motor-yacht-galaxy/luxury-motor-yacht-galaxy-photo-by-jeff-brown',
        'https://www.charterworld.com/news/shellshock-designs-stirling-designs-shortlisted-iya-award-2015-motor-yacht-galaxy/luxury-motor-yacht-galaxy-photo-by-jeff-brown',
      ]),
      guestCapacity: 11,
      beds: 6,
    },
    {
      name: 'MediumSlateBlue Yacht',
      yachtType: 'Sport',
      pricePerHour: '4057.81',
      createdAt: new Date('2025-01-25T09:32:23'),
      updatedAt: new Date('2025-01-10T03:41:46'),
      deletedAt: null,
      pics: 'https://www.rivieraaustralia.com/riviera-launches-the-100th-6000-sport-yacht-platinum-edition/',
      destinationId: 3,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery: JSON.stringify([
        'https://www.rivieraaustralia.com/riviera-launches-the-100th-6000-sport-yacht-platinum-edition/',
        'https://www.rivieraaustralia.com/riviera-launches-the-100th-6000-sport-yacht-platinum-edition/',
      ]),
      guestCapacity: 12,
      beds: 5,
    },
    {
      name: 'Navy Yacht',
      yachtType: 'Luxury',
      pricePerHour: '5170.91',
      createdAt: new Date('2025-01-24T01:04:40'),
      updatedAt: new Date('2025-01-30T23:13:27'),
      deletedAt: null,
      pics: 'https://www.luxxu.net/blog/expensive-luxury-yachts-world/',
      destinationId: 3,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery: JSON.stringify([
        'https://www.luxxu.net/blog/expensive-luxury-yachts-world/',
        'https://www.luxxu.net/blog/expensive-luxury-yachts-world/',
      ]),
      guestCapacity: 7,
      beds: 6,
    },
    {
      name: 'LightSeaGreen Yacht',
      yachtType: 'Sport',
      pricePerHour: '5968.57',
      createdAt: new Date('2025-02-16T06:39:38'),
      updatedAt: new Date('2025-04-25T22:27:30'),
      deletedAt: null,
      pics: 'https://www.charterworld.com/index.html?sub=Open-Style-Sport-Yacht',
      destinationId: 4,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery: JSON.stringify([
        'https://www.charterworld.com/index.html?sub=Open-Style-Sport-Yacht',
        'https://www.charterworld.com/index.html?sub=Open-Style-Sport-Yacht',
      ]),
      guestCapacity: 5,
      beds: 4,
    },
    {
      name: 'SandyBrown Yacht',
      yachtType: 'Luxury',
      pricePerHour: '6853.86',
      createdAt: new Date('2025-04-30T15:25:34'),
      updatedAt: new Date('2025-01-05T10:51:12'),
      deletedAt: null,
      pics: 'https://www.charterworld.com/news/top-10-aft-decks-luxury-yachts',
      destinationId: 4,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery: JSON.stringify([
        'https://www.charterworld.com/news/top-10-aft-decks-luxury-yachts',
        'https://www.charterworld.com/news/top-10-aft-decks-luxury-yachts',
      ]),
      guestCapacity: 11,
      beds: 5,
    },
    {
      name: 'LightSalmon Yacht',
      yachtType: 'Sport',
      pricePerHour: '5855.4',
      createdAt: new Date('2025-03-07T01:30:32'),
      updatedAt: new Date('2025-03-13T23:41:55'),
      deletedAt: null,
      pics: 'https://www.pershing-yacht.com/en-us/design',
      destinationId: 4,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery: JSON.stringify([
        'https://www.pershing-yacht.com/en-us/design',
        'https://www.pershing-yacht.com/en-us/design',
      ]),
      guestCapacity: 5,
      beds: 5,
    },
  ];
  await repo.save(yachtsSeed);
  console.log('✅ Yachts seeded');
}

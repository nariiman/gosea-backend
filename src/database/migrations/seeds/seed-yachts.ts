import { DataSource } from 'typeorm';
import { Yacht } from 'src/entities/Yacht';

export async function seedYachts(dataSource: DataSource) {
  const repo = dataSource.getRepository(Yacht);
  const yachtsSeed = [
    {
      name: 'Silver Yacht',
      yachtType: 'Luxury',
      pricePerHour: '4984.33',
      createdAt: new Date('2025-03-07T01:30:32'),
      updatedAt: new Date('2025-03-13T23:41:55'),
      deletedAt: null,
      pics: 'https://source.unsplash.com/800x600/?yacht,luxury,boat,0',
      destinationId: 1,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery:
        '["https://source.unsplash.com/800x600/?yacht,interior,0-1", "https://source.unsplash.com/800x600/?yacht,deck,0-2"]',
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
      pics: 'https://source.unsplash.com/800x600/?yacht,luxury,boat,1',
      destinationId: 1,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery:
        '["https://source.unsplash.com/800x600/?yacht,interior,1-1", "https://source.unsplash.com/800x600/?yacht,deck,1-2"]',
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
      pics: 'https://source.unsplash.com/800x600/?yacht,luxury,boat,2',
      destinationId: 1,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery:
        '["https://source.unsplash.com/800x600/?yacht,interior,2-1", "https://source.unsplash.com/800x600/?yacht,deck,2-2"]',
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
      pics: 'https://source.unsplash.com/800x600/?yacht,luxury,boat,3',
      destinationId: 2,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery:
        '["https://source.unsplash.com/800x600/?yacht,interior,3-1", "https://source.unsplash.com/800x600/?yacht,deck,3-2"]',
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
      pics: 'https://source.unsplash.com/800x600/?yacht,luxury,boat,4',
      destinationId: 2,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery:
        '["https://source.unsplash.com/800x600/?yacht,interior,4-1", "https://source.unsplash.com/800x600/?yacht,deck,4-2"]',
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
      pics: 'https://source.unsplash.com/800x600/?yacht,luxury,boat,5',
      destinationId: 2,
      durationUnit: 'hour',
      durations: '1,2,3',
      gallery:
        '["https://source.unsplash.com/800x600/?yacht,interior,5-1", "https://source.unsplash.com/800x600/?yacht,deck,5-2"]',
      guestCapacity: 5,
      beds: 5,
    },
  ];
  await repo.save(yachtsSeed);
  console.log('✅ Yachts seeded');
}

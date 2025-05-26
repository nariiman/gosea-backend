import { Destinations } from '../../../entities/Destinations';
import { DataSource } from 'typeorm';

export async function seedDestinations(dataSource: DataSource) {
  const repo = dataSource.getRepository(Destinations);

  await dataSource.query(
    `TRUNCATE TABLE "destinations" RESTART IDENTITY CASCADE`,
  );

  const destinationsSeed = [
    {
      name: 'Marsa Alam',
      description: 'Explore the serene waters and coral reefs of Marsa Alam.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_7c3c4b7e4c8e4c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'Sharm El Sheikh',
      description: 'A paradise for diving and marine life in Egypt.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_8c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'Hurghada',
      description:
        'A vibrant resort town known for its stunning beaches and diving spots.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_9c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'Dahab',
      description:
        'A laid-back town famous for its windsurfing and diving opportunities.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_0c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'El Gouna',
      description:
        'A modern resort town with lagoons, upscale hotels, and water activities.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_1c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'Soma Bay',
      description:
        'A luxury resort area offering pristine beaches and world-class diving.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_2c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'Makadi Bay',
      description: 'A peaceful bay known for its coral reefs and clear waters.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_3c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'Taba',
      description:
        'A small town at the northern tip of the Gulf of Aqaba, offering stunning views.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_4c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'Ras Sudr',
      description:
        'A favorite spot for kite surfers, with long stretches of sandy beaches.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_5c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
    {
      name: 'Alexandria',
      description:
        'A historic city with Mediterranean beaches and rich cultural heritage.',
      imageUrl:
        'https://www.localguidetoegypt.com/_files/ugd/3c7a9b_6c9e8c9e8c9e8c9e8c9e8c9e8c9e8c9e.jpg',
      isActive: true,
    },
  ];
  await repo.save(destinationsSeed);
  console.log('✅ Destinations seeded');
}

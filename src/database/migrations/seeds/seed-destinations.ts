import { Destinations } from 'src/entities/Destinations';
import { DataSource } from 'typeorm';

export async function seedDestinations(dataSource: DataSource) {
  const repo = dataSource.getRepository(Destinations);
  const destinationsSeed = [
    {
      name: 'Marsa Alam',
      description: 'Explore the serene waters and coral reefs of Marsa Alam.',
      imageUrl: 'https://source.unsplash.com/800x600/?destination,beach,sea,0',
      isActive: true,
    },
    {
      name: 'Sharm El Sheikh',
      description: 'A paradise for diving and marine life in Egypt.',
      imageUrl: 'https://source.unsplash.com/800x600/?destination,beach,sea,1',
      isActive: true,
    },
  ];
  await repo.save(destinationsSeed);
  console.log('✅ Destinations seeded');
}

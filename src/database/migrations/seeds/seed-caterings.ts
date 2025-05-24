import { DataSource } from 'typeorm';
import { Catering } from 'src/entities/Catering';

export async function seedCaterings(dataSource: DataSource) {
  const repo = dataSource.getRepository(Catering);
  const cateringsSeed = [
    {
      name: 'Fuentes and Sons Catering',
      caterer: 'Michele Hamilton',
      pricePerPerson: '326.93',
      createdAt: '2025-03-08T15:23:35',
      updatedAt: '2025-04-11T23:31:09',
      deletedAt: null,
      pics: 'https://source.unsplash.com/800x600/?food,catering,meal,0',
      description: 'Performance claim style home painting about deal capital.',
      destinationId: 1,
    },
    {
      name: 'Krause, Hall and Baker Catering',
      caterer: 'Wendy Lewis',
      pricePerPerson: '294.95',
      createdAt: '2025-02-01T00:24:44',
      updatedAt: '2025-01-19T09:09:07',
      deletedAt: null,
      pics: 'https://source.unsplash.com/800x600/?food,catering,meal,1',
      description: 'Condition east within such total audience son state.',
      destinationId: 1,
    },
    {
      name: 'Burgess, Keller and Sweeney Catering',
      caterer: 'Robert Roberts',
      pricePerPerson: '320.57',
      createdAt: '2025-02-17T13:35:57',
      updatedAt: '2025-03-18T10:45:54',
      deletedAt: null,
      pics: 'https://source.unsplash.com/800x600/?food,catering,meal,2',
      description: 'Raise color remain road early none scientist.',
      destinationId: 1,
    },
    {
      name: 'Quinn LLC Catering',
      caterer: 'Tyler Peterson',
      pricePerPerson: '398.84',
      createdAt: '2025-01-17T09:31:55',
      updatedAt: '2025-01-16T19:59:10',
      deletedAt: null,
      pics: 'https://source.unsplash.com/800x600/?food,catering,meal,3',
      description: 'Light then way market shake action.',
      destinationId: 2,
    },
    {
      name: 'Solis-Cortez Catering',
      caterer: 'Felicia Weber',
      pricePerPerson: '354.86',
      createdAt: '2025-01-13T05:02:40',
      updatedAt: '2025-02-07T06:38:45',
      deletedAt: null,
      pics: 'https://source.unsplash.com/800x600/?food,catering,meal,4',
      description: 'Produce artist will reality talk according near student.',
      destinationId: 2,
    },
    {
      name: 'Smith Ltd Catering',
      caterer: 'Tracey Holt',
      pricePerPerson: '334.72',
      createdAt: '2025-04-25T02:54:59',
      updatedAt: '2025-01-15T04:54:20',
      deletedAt: null,
      pics: 'https://source.unsplash.com/800x600/?food,catering,meal,5',
      description: 'Building score together say artist paper song like arm.',
      destinationId: 2,
    },
  ];
  await repo.save(cateringsSeed);
  console.log('✅ Caterings seeded');
}

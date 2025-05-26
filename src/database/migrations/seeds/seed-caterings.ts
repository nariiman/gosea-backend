import { DataSource } from 'typeorm';
import { Catering } from '../../../entities/Catering';

export async function seedCaterings(dataSource: DataSource) {
  const repo = dataSource.getRepository(Catering);

  await dataSource.query(`TRUNCATE TABLE "catering" RESTART IDENTITY CASCADE`);
  const cateringsSeed = [
    {
      name: 'The Sage Experience',
      caterer: 'Amr Barghash & Ahmed El Meligy',
      pricePerPerson: '450.00',
      createdAt: new Date('2025-03-08T15:23:35'),
      updatedAt: new Date('2025-04-11T23:31:09'),
      deletedAt: null,
      pics: 'https://www.localguidetoegypt.com/_files/ugd/2f1b9d_6f8f5c3e9e7f4c3a8b9e5a2e3c9f5e3d.jpg',
      description:
        'Award-winning catering service offering a 360° dining experience with diverse and exquisite culinary creations.',
      destinationId: 3,
    },
    {
      name: 'The Cookery Co.',
      caterer: 'Founders: Three Egyptian Women',
      pricePerPerson: '400.00',
      createdAt: new Date('2025-02-01T00:24:44'),
      updatedAt: new Date('2025-01-19T09:09:07'),
      deletedAt: null,
      pics: 'https://www.localguidetoegypt.com/_files/ugd/2f1b9d_1e4b5c3e9e7f4c3a8b9e5a2e3c9f5e3d.jpg',
      description:
        'Popular catering service known for customizable menus and Instagram-worthy tablescapes.',
      destinationId: 3,
    },
    {
      name: 'Avec Karim',
      caterer: 'Chef Karim Abdel Rahman',
      pricePerPerson: '600.00',
      createdAt: new Date('2025-02-17T13:35:57'),
      updatedAt: new Date('2025-03-18T10:45:54'),
      deletedAt: null,
      pics: 'https://www.localguidetoegypt.com/_files/ugd/2f1b9d_2e4b5c3e9e7f4c3a8b9e5a2e3c9f5e3d.jpg',
      description:
        'Haute gastronomic catering service offering avant-garde experiences for upscale events.',
      destinationId: 4,
    },
    {
      name: 'Tamr Jannah',
      caterer: 'Established Catering Service',
      pricePerPerson: '350.00',
      createdAt: new Date('2025-01-17T09:31:55'),
      updatedAt: new Date('2025-01-16T19:59:10'),
      deletedAt: null,
      pics: 'https://www.localguidetoegypt.com/_files/ugd/2f1b9d_3e4b5c3e9e7f4c3a8b9e5a2e3c9f5e3d.jpg',
      description:
        'Specializes in classic Egyptian and Middle Eastern cuisine with nearly 20 years of experience.',
      destinationId: 5,
    },
    {
      name: 'Crave Catering',
      caterer: 'Crave Restaurant Group',
      pricePerPerson: '420.00',
      createdAt: new Date('2025-01-13T05:02:40'),
      updatedAt: new Date('2025-02-07T06:38:45'),
      deletedAt: null,
      pics: 'https://www.localguidetoegypt.com/_files/ugd/2f1b9d_4e4b5c3e9e7f4c3a8b9e5a2e3c9f5e3d.jpg',
      description:
        'Offers a wide range of catering services from weddings to corporate events, known for comfort food.',
      destinationId: 6,
    },
    {
      name: 'Sett El Biet',
      caterer: 'Traditional Egyptian Catering',
      pricePerPerson: '380.00',
      createdAt: new Date('2025-04-25T02:54:59'),
      updatedAt: new Date('2025-01-15T04:54:20'),
      deletedAt: null,
      pics: 'https://www.localguidetoegypt.com/_files/ugd/2f1b9d_5e4b5c3e9e7f4c3a8b9e5a2e3c9f5e3d.jpg',
      description:
        'Known for buffets filled with classic dishes like grilled kofta, vine leaves, and macaroni bechamel.',
      destinationId: 3,
    },
  ];
  await repo.save(cateringsSeed);
  console.log('✅ Caterings seeded');
}

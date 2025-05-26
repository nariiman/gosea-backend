import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Yacht } from '../../entities/Yacht';
import { Repository } from 'typeorm';

@Injectable()
export class YachtsService {
  constructor(
    @InjectRepository(Yacht)
    private readonly yachtRepo: Repository<Yacht>,
  ) {}

  findAll() {
    return this.yachtRepo.find();
  }

  async findByDestination(destinationId: number) {
    const yachts = await this.yachtRepo.find({
      where: { destinationId },
    });

    return yachts.map((yacht) => ({
      id: yacht.id,
      name: yacht.name,
      yachtType: yacht.yachtType,
      pricePerHour: yacht.pricePerHour,
      pics: yacht.pics,
      destinationId: yacht.destinationId,
      durationUnit: yacht.durationUnit,
      durations: yacht.durations,
      gallery: yacht.gallery,
      guest_capacity: yacht.guestCapacity,
      beds: yacht.beds,
    }));
  }
}

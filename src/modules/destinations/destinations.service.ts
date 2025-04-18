import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Destinations } from 'src/entities/Destinations';
import { Repository } from 'typeorm';

@Injectable()
export class DestinationsService {
  constructor(
    @InjectRepository(Destinations)
    private readonly destinationsRepo: Repository<Destinations>,
  ) {}

  getAllDestinations(): Promise<Destinations[]> {
    return this.destinationsRepo.find();
  }
}

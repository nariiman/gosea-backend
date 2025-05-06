import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catering } from 'src/entities/Catering';
import { Repository } from 'typeorm';

@Injectable()
export class CateringService {
  constructor(
    @InjectRepository(Catering)
    private readonly cateringRepo: Repository<Catering>,
  ) {}

  findAll() {
    return this.cateringRepo.find();
  }

  findByDestination(destinationId: number) {
    return this.cateringRepo.find({
      where: { destinationId },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Yacht } from 'src/entities/Yacht';
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

  findByDestination(destinationId: number) {
    return this.yachtRepo.find({
      where: { destinationId },
    });
  }
}
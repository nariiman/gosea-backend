import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destinations } from '../../entities/Destinations';

@Controller('destinations')
export class DestinationsController {
  constructor(
    @InjectRepository(Destinations)
    private readonly destinationsRepo: Repository<Destinations>,
  ) {}

  // ✅ Fetch all destinations (for homepage)
  @Get()
  async getAll(): Promise<Destinations[]> {
    return await this.destinationsRepo.find({
      order: { id: 'ASC' }, // optional sorting
    });
  }

  // ✅ Fetch one destination by ID (for breadcrumbs)
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const dest = await this.destinationsRepo.findOne({ where: { id } });
    if (!dest) throw new NotFoundException('Destination not found');
    return dest;
  }
}

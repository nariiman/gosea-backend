// destinations.controller.ts
import { Controller, Get } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { Destinations } from 'src/entities/Destinations';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  getAll(): Promise<Destinations[]> {
    return this.destinationsService.getAllDestinations();
  }
}

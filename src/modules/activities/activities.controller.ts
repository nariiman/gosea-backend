import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  // GET /activities
  @Get()
  getAllOrByDestination(@Query('destinationId') destinationId?: number) {
    if (destinationId) {
      return this.activitiesService.findByDestination(destinationId);
    }
    return this.activitiesService.findAll();
  }

  // GET /activities/destination/5 (optional but still keep if you want)
  @Get('destination/:id')
  getByDestination(@Param('id', ParseIntPipe) id: number) {
    return this.activitiesService.findByDestination(id);
  }
}

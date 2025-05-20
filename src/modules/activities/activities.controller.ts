import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  // ✅ GET /activities/destination/:id
  @Get('destination/:id')
  getByDestination(@Param('id', ParseIntPipe) id: number) {
    return this.activitiesService.findByDestination(id);
  }

  // ✅ GET /activities/types/:destinationId
  @Get('types/:destinationId')
  getTypesByDestination(@Param('destinationId', ParseIntPipe) destinationId: number) {
    return this.activitiesService.getTypesByDestination(destinationId);
  }

  // ✅ GET /activities?destinationId=X or all
  @Get()
  getAllOrByDestination(@Query('destinationId') destinationId?: number) {
    if (destinationId) {
      return this.activitiesService.findByDestination(destinationId);
    }
    return this.activitiesService.findAll();
  }

  // ✅ GET /activities/:id
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const activity = await this.activitiesService.findById(id);
    if (!activity) throw new NotFoundException(`Activity with ID ${id} not found`);
    return activity;
  }
}

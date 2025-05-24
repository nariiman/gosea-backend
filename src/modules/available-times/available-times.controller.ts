import { Controller, Get, Query } from '@nestjs/common';
import { AvailableTimesService } from './available-times.service';
@Controller('available-times')
export class AvailableTimesController {
  constructor(private readonly availableTimesService: AvailableTimesService) {}

  @Get()
  getAvailableTimes(
    @Query('yachtId') yachtId: number,
    @Query('date') date: string,
    @Query('duration') duration: number,
  ) {
    return this.availableTimesService.findAvailableTimes(
      yachtId,
      date,
      duration,
    );
  }
}

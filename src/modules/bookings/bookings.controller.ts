// bookings.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateActivityBookingDto } from './dtos/request/create-activity-booking.dto';
import { CreateYachtBookingDto } from './dtos/request/create-yacht-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get('user/:uid')
  getUserBookings(@Param('uid') uid: string) {
    return this.bookingsService.getUserBookings(uid);
  }

  @Post('yacht')
  async bookYacht(@Body() dto: CreateYachtBookingDto): Promise<{
    message: string;
    bookingId: number;
  }> {
    return this.bookingsService.bookYacht(dto);
  }

  @Post('activity')
  async bookActivity(@Body() dto: CreateActivityBookingDto) {
    return this.bookingsService.bookActivity(dto);
  }
}

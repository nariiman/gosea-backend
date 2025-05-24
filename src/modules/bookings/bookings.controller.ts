import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('bookings')
@UseGuards(JwtAuthGuard)
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  // Create booking
  @Post()
  async createBooking(@Request() req, @Body() body: any) {
    return this.bookingsService.createBooking(req.user.id, body);
  }

  // Get user's bookings
  @Get('my')
  async getMyBookings(@Request() req) {
    return this.bookingsService.getClientBookings(req.user.id);
  }
}

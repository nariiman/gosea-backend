import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/entities/Booking';
import { TransportRequest } from 'src/entities/TransportRequest';
import { BookingActivities } from 'src/entities/BookingActivities';
import { Catering } from 'src/entities/Catering';
import { Yacht } from 'src/entities/Yacht';
import { ClientProfile } from 'src/entities/ClientProfile';

import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Booking,
      TransportRequest,
      BookingActivities,
      Catering,
      Yacht,
      ClientProfile,
    ]),
  ],
  controllers: [BookingsController],
  providers: [BookingsService],
  exports: [BookingsService],
})
export class BookingsModule {}

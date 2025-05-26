import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from '../../entities/Booking';
import { TransportRequest } from '../../entities/TransportRequest';
import { BookingActivities } from '../../entities/BookingActivities';
import { Catering } from '../../entities/Catering';
import { Yacht } from '../../entities/Yacht';
import { ClientProfile } from '../../entities/ClientProfile';

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

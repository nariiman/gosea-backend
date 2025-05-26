import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from '../../entities/Booking';
import { BookingActivities } from '../../entities/BookingActivities';
import { TransportRequest } from '../../entities/TransportRequest';
import { CreateActivityBookingDto } from './dtos/request/create-activity-booking.dto';
import { CreateYachtBookingDto } from './dtos/request/create-yacht-booking.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {
  @InjectRepository(Booking)
  private readonly bookingRepo: Repository<Booking>;
  @InjectRepository(TransportRequest)
  private readonly transportRepo: Repository<TransportRequest>;
  @InjectRepository(BookingActivities)
  private readonly bookingActivitiesRepo: Repository<BookingActivities>;

  async getBookingById(id: number) {
    return this.bookingRepo.findOne({
      where: { id },
      relations: [
        'yacht',
        'catering',
        'bookingActivities',
        'transportRequests',
        'transportRequests.company',
      ],
    });
  }

  async getUserBookings(uid: string) {
    return this.bookingRepo.find({
      where: { userUid: uid },
      relations: [
        'yacht',
        'catering',
        'bookingActivities',
        'transportRequests',
        'transportRequests.company',
      ],
    });
  }

  async bookYacht(dto: CreateYachtBookingDto) {
    const booking = await this.bookingRepo.save({
      ...dto,
      bookingDate: new Date(),
      transportationRequestId: null,
    });

    // Step 2: Save transport and attach booking if provided
    if (dto.transportationRequest) {
      const savedTransport = await this.transportRepo.save({
        ...dto.transportationRequest,
        status: 'Pending',
        bookingId: booking.id,
      });

      await this.bookingRepo.update(booking.id, {
        transportationRequestId: savedTransport.id,
      });
    }

    // Step 3: Save linked activities
    if (dto.activities?.length) {
      const activityLinks = dto.activities.map((id) => ({
        booking,
        activity: { id },
        startTime: '00:00',
        endTime: '00:00',
      }));

      activityLinks.forEach(async (activity) => {
        await this.bookingActivitiesRepo.save(activity);
      });
    }

    return { message: 'Yacht booking confirmed', bookingId: booking.id };
  }

  async bookActivity(dto: CreateActivityBookingDto): Promise<{
    message: string;
    bookingId: number;
  }> {
    // Step 1: Save booking
    const booking = await this.bookingRepo.save({
      bookingDate: new Date(),
      reservationDate: dto.date,
      reservationTime: dto.preferredTime,
      numberOfPeople: dto.riders,
      bookingPrice: dto.price.toString(),
      userUid: dto.userId,
    });

    // Step 2: Optional transport
    if (dto.transportationRequest) {
      const savedTransport = await this.transportRepo.save({
        ...dto.transportationRequest,
        status: 'Pending',
        booking: { id: booking.id },
      });

      await this.bookingRepo.update(booking.id, {
        transportationRequestId: savedTransport.id,
      });
    }

    return { message: 'Activity booking confirmed', bookingId: booking.id };
  }
}

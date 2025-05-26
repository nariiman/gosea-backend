import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from '../../entities/Booking';
import { BookingActivities } from '../../entities/BookingActivities';
import { TransportRequest } from '../../entities/TransportRequest';
import { CreateActivityBookingDto } from './dtos/request/create-activity-booking.dto';
import { CreateYachtBookingDto } from './dtos/request/create-yacht-booking.dto';
import { Repository } from 'typeorm';
import { Catering } from 'src/entities/Catering';
import { BookingCateringMenu } from 'src/entities/BookingCateringMenu';

@Injectable()
export class BookingsService {
  @InjectRepository(Booking)
  private readonly bookingRepo: Repository<Booking>;
  @InjectRepository(TransportRequest)
  private readonly transportRepo: Repository<TransportRequest>;
  @InjectRepository(BookingActivities)
  private readonly bookingActivitiesRepo: Repository<BookingActivities>;
  @InjectRepository(Catering)
  private readonly cateringRepo: Repository<Catering>;
  @InjectRepository(BookingCateringMenu)
  private readonly bookingCateringMenuRepo: Repository<BookingCateringMenu>;

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
        'bookingCateringMenus',
        'bookingCateringMenus.catering',
        'bookingActivities',
        'transportRequests',
        'transportRequests.company',
      ],
    });
  }

  async bookYacht(
    dto: CreateYachtBookingDto,
  ): Promise<{ message: string; bookingId: number }> {
    const booking = await this.bookingRepo.save({
      bookingType: dto.bookingType,
      bookingDate: dto.bookingDate,
      reservationDate: dto.reservationDate,
      reservationTime: dto.reservationTime,
      bookingPrice: dto.bookingPrice.toString(),
      numberOfPeople: dto.numberOfPeople,
      userUid: dto.userUid,
      yacht: { id: dto.yachtId },
    });

    if (dto.transportationRequest) {
      const transport = await this.transportRepo.save({
        ...dto.transportationRequest,
        status: 'Pending',
        booking,
      });

      await this.bookingRepo.update(booking.id, {
        transportationRequestId: transport.id,
      });
    }

    if (dto.activities?.length) {
      await Promise.all(
        dto.activities.map((id) =>
          this.bookingActivitiesRepo.save({
            booking,
            activity: { id },
            startTime: '00:00',
            endTime: '00:00',
          }),
        ),
      );
    }

    if (dto.catering?.menus?.length) {
      const menus = await this.cateringRepo.findByIds(dto.catering.menus);

      await this.bookingCateringMenuRepo.save(
        menus.map((menu) => ({
          booking,
          catering: menu,
          guests: dto.numberOfPeople,
          notes: dto.catering?.notes ?? undefined,
          totalPrice: dto.catering?.total ?? undefined,
        })),
      );
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

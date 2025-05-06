import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from 'src/entities/Booking';
import { TransportRequest } from 'src/entities/TransportRequest';
import { ClientProfile } from 'src/entities/ClientProfile';
import { Yacht } from 'src/entities/Yacht';
import { Catering } from 'src/entities/Catering';
import { BookingActivities } from 'src/entities/BookingActivities';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking) private bookingRepo: Repository<Booking>,
    @InjectRepository(TransportRequest) private transportRepo: Repository<TransportRequest>,
    @InjectRepository(ClientProfile) private clientRepo: Repository<ClientProfile>,
    @InjectRepository(Yacht) private yachtRepo: Repository<Yacht>,
    @InjectRepository(Catering) private cateringRepo: Repository<Catering>,
    @InjectRepository(BookingActivities) private bookingActivitiesRepo: Repository<BookingActivities>,
  ) {}

  // ✅ Create booking
  async createBooking(clientId: number, dto: any) {
    const booking = this.bookingRepo.create({
      bookingDate: new Date(),
      reservationDate: dto.reservationDate,
      reservationTime: dto.reservationTime,
      numberOfPeople: dto.numberOfPeople,
      bookingPrice: dto.totalPrice,
      paymentType: dto.paymentType,
      bookingStatus: "pending",
      client: { id: clientId } as any,
      yacht: dto.yachtId ? { id: dto.yachtId } as any : null,
      catering: dto.cateringId ? { id: dto.cateringId } as any : null,
    });

    const savedBooking = await this.bookingRepo.save(booking);

    // ✅ Save activities if any
    if (dto.activityIds?.length) {
      const activities = dto.activityIds.map((activityId) =>
        this.bookingActivitiesRepo.create({
          booking: savedBooking,
          activity: { id: activityId } as any,
          startTime: dto.reservationTime,
          endTime: dto.reservationTime,
        })
      );

      await this.bookingActivitiesRepo.save(activities);
    }

    // ✅ Create transport request if needed
    if (dto.transportation) {
      const transport = this.transportRepo.create({
        requestType: 'booking',
        requestDescription: `Transportation for booking ID ${savedBooking.id}`,
        status: 'Pending',
      });
      await this.transportRepo.save(transport);
    }

    return savedBooking;
  }

  // ✅ Get bookings for client
  async getClientBookings(clientId: number) {
    return this.bookingRepo.find({
      where: { client: { id: clientId } },
      relations: ['yacht', 'catering', 'bookingActivities', 'bookingActivities.activity'],
      order: { reservationDate: 'DESC' },
    });
  }
}

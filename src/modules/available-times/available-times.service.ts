import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from 'src/entities/Booking';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';

@Injectable()
export class AvailableTimesService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepo: Repository<Booking>,
  ) {}

  async findAvailableTimes(yachtId: number, date: string, duration: number): Promise<string[]> {
    const startOfDay = dayjs(date).startOf('day');
    const allSlots = this.generateSlots(8, 22, duration); // from 8:00 to 22:00

    const bookings = await this.bookingRepo.find({
      where: {
        yacht: { id: yachtId },
        reservationDate: startOfDay.toDate(),
        bookingStatus: 'Confirmed',
      },
    });

    const unavailable = bookings.map((b) =>
      dayjs(`${b.reservationDate.toISOString().split('T')[0]} ${b.reservationTime}`, 'YYYY-MM-DD HH:mm')
    );

    const available = allSlots.filter((slot) => {
      return !unavailable.some((b) => {
        const diff = Math.abs(slot.diff(b, 'minute'));
        return diff < duration * 60;
      });
    });

    return available.map((slot) => slot.format('HH:mm'));
  }

  generateSlots(startHour: number, endHour: number, duration: number): Dayjs[] {
    const slots: Dayjs[] = [];

    for (let h = startHour; h <= endHour - duration; h++) {
      slots.push(dayjs().hour(h).minute(0).second(0));
      slots.push(dayjs().hour(h).minute(30).second(0));
    }

    return slots;
  }
}

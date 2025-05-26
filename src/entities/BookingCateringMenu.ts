import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';
import { Booking } from './Booking';
import { Catering } from './Catering';

@Entity('booking_catering_menu')
export class BookingCateringMenu {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Booking, (booking) => booking.bookingCateringMenus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'booking_id' })
  booking: Booking;

  @ManyToOne(() => Catering, { eager: true })
  @JoinColumn({ name: 'catering_id' })
  catering: Catering;

  @Column('int')
  guests: number;

  @Column('text', { nullable: true })
  notes: string;

  @Column('numeric', {
    name: 'total_price',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  totalPrice: number;
}

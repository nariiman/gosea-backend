import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientProfile } from './ClientProfile';
import { Yacht } from './Yacht';
import { BookingActivities } from './BookingActivities';
import { Feedback } from './Feedback';
import { Invoice } from './Invoice';
import { TransportRequest } from './TransportRequest';
import { BookingCateringMenu } from 'src/entities/BookingCateringMenu';

@Index('booking_pkey', ['id'], { unique: true })
@Entity('booking')
export class Booking {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('timestamp', { name: 'booking_date' })
  bookingDate: Date;

  @Column('timestamp', { name: 'reservation_date' })
  reservationDate: Date;

  @Column('time', { name: 'reservation_time' })
  reservationTime: string;

  @Column('integer', { name: 'number_of_people' })
  numberOfPeople: number;

  @Column('numeric', { name: 'booking_price', precision: 10, scale: 2 })
  bookingPrice: string;

  @Column('character varying', {
    name: 'booking_status',
    length: 50,
    default: () => "'pending'",
  })
  bookingStatus: string;

  @Column('integer', { name: 'transportation_request_id', nullable: true })
  transportationRequestId: number | null;

  @Column('uuid', { name: 'user_uid' })
  userUid: string;

  @ManyToOne(() => Yacht, (yacht) => yacht.bookings)
  @JoinColumn({ name: 'yacht_id' })
  yacht: Yacht;

  @ManyToOne(() => ClientProfile, (client) => client.bookings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'client_id' })
  client: ClientProfile;

  @OneToMany(() => BookingActivities, (ba) => ba.booking)
  bookingActivities: BookingActivities[];

  @OneToMany(() => Feedback, (fb) => fb.booking)
  feedbacks: Feedback[];

  @OneToMany(() => Invoice, (inv) => inv.booking)
  invoices: Invoice[];

  @OneToMany(() => TransportRequest, (tr) => tr.booking)
  transportRequests: TransportRequest[];

  @OneToMany(() => BookingCateringMenu, (bcm) => bcm.booking, {
    cascade: true,
  })
  bookingCateringMenus: BookingCateringMenu[];
}

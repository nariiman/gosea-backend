import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Booking } from './Booking';
import { Destinations } from './Destinations';

@Index('yacht_pkey', ['id'], { unique: true })
@Entity('yacht', { schema: 'public' })
export class Yacht {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', {
    name: 'yacht_type',
    nullable: true,
    length: 100,
  })
  yachtType: string | null;

  @Column('numeric', { name: 'price_per_hour', precision: 10, scale: 2 })
  pricePerHour: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'now()',
  })
  createdAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    nullable: true,
    default: () => 'now()',
  })
  updatedAt: Date | null;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @Column('character varying', { name: 'pics', nullable: true })
  pics: string | null;

  @Column('int', { name: 'destination_id', nullable: true })
  destinationId: number | null;

  @ManyToOne(() => Destinations, (destination) => destination.yachts)
  @JoinColumn({ name: 'destination_id' })
  destination: Destinations;

  @Column('character varying', {
    name: 'duration_unit',
    nullable: true,
    length: 20,
  })
  durationUnit: string | null;

  @Column('character varying', {
    name: 'durations',
    nullable: true,
  })
  durations: string | null;

  @Column('text', {
    name: 'gallery',
    nullable: true,
  })
  gallery: string | null; // JSON string of array of image paths

  @Column('integer', {
    name: 'guest_capacity',
    nullable: true,
    default: () => '1',
  })
  guestCapacity: number | null;

  @Column('integer', {
    name: 'beds',
    nullable: true,
    default: () => '1',
  })
  beds: number | null;

  @OneToMany(() => Booking, (booking) => booking.yacht)
  bookings: Booking[];
}

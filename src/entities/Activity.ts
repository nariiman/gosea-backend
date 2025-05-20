import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BookingActivities } from './BookingActivities';
import { Destinations } from './Destinations';

@Index('activity_pkey', ['id'], { unique: true })
@Entity('activity', { schema: 'public' })
export class Activity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', {
    name: 'activity_type',
    nullable: true,
    length: 100,
  })
  activityType: string | null;

  @Column('numeric', {
    name: 'price_per_hour',
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  pricePerHour: number;

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

  @Column('integer', { name: 'destination_id', nullable: true })
  destinationId: number | null;

  @Column({ name: 'min_age', type: 'integer', nullable: true })
  minAge: number;

  @Column({ name: 'rating', type: 'numeric', precision: 2, scale: 1, default: 4.8 })
  rating: number;

  @Column({ name: 'review_count', type: 'integer', default: 100 })
  reviewCount: number;

  @Column({ name: 'duration_options', type: 'text', array: true, nullable: true })
  durationOptions: string[];

  @Column({ name: 'duration_unit', type: 'integer', default: 15 })
  durationUnit: number;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => Destinations, (destination) => destination.activities, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'destination_id' })
  destination: Destinations;

  @OneToMany(() => BookingActivities, (booking) => booking.activity)
  bookingActivities: BookingActivities[];
}
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Booking } from './Booking';
import { ClientProfile } from './ClientProfile';

@Index('feedback_pkey', ['id'], { unique: true })
@Entity('feedback', { schema: 'public' })
export class Feedback {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('text', { name: 'comments', nullable: true })
  comments: string | null;

  @Column('integer', { name: 'rating', nullable: true })
  rating: number | null;

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

  @ManyToOne(() => Booking, (booking) => booking.feedbacks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'booking_id', referencedColumnName: 'id' }])
  booking: Booking;

  @ManyToOne(() => ClientProfile, (clientProfile) => clientProfile.feedbacks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'client_id', referencedColumnName: 'id' }])
  client: ClientProfile;
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Activity } from "./Activity";
import { Booking } from "./Booking";
// import { Booking } from './Booking';



@Index("booking_activities_pkey", ["id"], { unique: true })
@Entity("booking_activities", { schema: "public" })
export class BookingActivities {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("time without time zone", { name: "start_time" })
  startTime: string;

  @Column("time without time zone", { name: "end_time" })
  endTime: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp without time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "now()",
  })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Activity, (activity) => activity.bookingActivities, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "activity_id", referencedColumnName: "id" }])
  activity: Activity;

  

  @ManyToOne(() => Booking, (booking) => booking.bookingActivities)
  @JoinColumn([{ name: 'booking_id', referencedColumnName: 'id' }]) 
  booking: Booking;

}


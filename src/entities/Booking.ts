import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Catering } from "./Catering";
import { ClientProfile } from "./ClientProfile";
import { Yacht } from "./Yacht";
import { BookingActivities } from "./BookingActivities";
import { Feedback } from "./Feedback";
import { Invoice } from "./Invoice";

@Index("booking_pkey", ["id"], { unique: true })
@Entity("booking", { schema: "public" })
export class Booking {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", { name: "booking_date" })
  bookingDate: Date;

  @Column("timestamp without time zone", { name: "reservation_date" })
  reservationDate: Date;

  @Column("time without time zone", { name: "reservation_time" })
  reservationTime: string;

  @Column("integer", { name: "number_of_people" })
  numberOfPeople: number;

  @Column("numeric", { name: "booking_price", precision: 10, scale: 2 })
  bookingPrice: string;

  @Column("numeric", {
    name: "discount",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0.00",
  })
  discount: string | null;

  @Column("character varying", {
    name: "payment_type",
    nullable: true,
    length: 50,
  })
  paymentType: string | null;

  @Column("character varying", {
    name: "booking_status",
    nullable: true,
    length: 50,
    default: () => "'pending'",
  })
  bookingStatus: string | null;

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

  @ManyToOne(() => Catering, (catering) => catering.bookings)
  @JoinColumn([{ name: "catering_id", referencedColumnName: "id" }])
  catering: Catering;

  @ManyToOne(() => ClientProfile, (clientProfile) => clientProfile.bookings, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: ClientProfile;

  @ManyToOne(() => Yacht, (yacht) => yacht.bookings)
  @JoinColumn([{ name: "yacht_id", referencedColumnName: "id" }])
  yacht: Yacht;

  @OneToMany(
    () => BookingActivities,
    (bookingActivities) => bookingActivities.booking
  )
  bookingActivities: BookingActivities[];

  @OneToMany(() => Feedback, (feedback) => feedback.booking)
  feedbacks: Feedback[];

  @OneToMany(() => Invoice, (invoice) => invoice.booking)
  invoices: Invoice[];
}

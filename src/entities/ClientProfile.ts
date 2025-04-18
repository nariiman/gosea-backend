import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Booking } from "./Booking";
import { ClientPhones } from "./ClientPhones";
import { Feedback } from "./Feedback";

@Index("client_profile_email_key", ["email"], { unique: true })
@Index("client_profile_pkey", ["id"], { unique: true })
@Entity("client_profile", { schema: "public" })
export class ClientProfile {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "first_name", length: 100 })
  firstName: string;

  @Column("character varying", { name: "last_name", length: 100 })
  lastName: string;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("character varying", { name: "email", unique: true, length: 255 })
  email: string;

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

  @OneToMany(() => Booking, (booking) => booking.client)
  bookings: Booking[];

  @OneToMany(() => ClientPhones, (clientPhones) => clientPhones.client)
  clientPhones: ClientPhones[];

  @OneToMany(() => Feedback, (feedback) => feedback.client)
  feedbacks: Feedback[];
}

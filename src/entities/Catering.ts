import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Booking } from "./Booking";
import { Destinations } from "./Destinations";

@Index("catering_pkey", ["id"], { unique: true })
@Entity("catering", { schema: "public" })
export class Catering {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "caterer", nullable: true, length: 255 })
  caterer: string | null;

  @Column("numeric", { name: "price_per_person", precision: 10, scale: 2 })
  pricePerPerson: string;

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

  @Column("character varying", { name: "pics", nullable: true })
  pics: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "destination_id", nullable: true })
  destinationId: number | null;

  @ManyToOne(() => Destinations, (destination) => destination.caterings)
  @JoinColumn({ name: "destination_id" })
  destination: Destinations;

  @OneToMany(() => Booking, (booking) => booking.catering)
  bookings: Booking[];
}

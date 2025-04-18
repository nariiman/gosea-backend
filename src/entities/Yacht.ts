import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Booking } from "./Booking";

@Index("yacht_pkey", ["id"], { unique: true })
@Entity("yacht", { schema: "public" })
export class Yacht {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", {
    name: "yacht_type",
    nullable: true,
    length: 100,
  })
  yachtType: string | null;

  @Column("numeric", { name: "price_per_hour", precision: 10, scale: 2 })
  pricePerHour: string;

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

  @OneToMany(() => Booking, (booking) => booking.yacht)
  bookings: Booking[];
}

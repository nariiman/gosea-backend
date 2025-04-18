import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookingActivities } from "./BookingActivities";

@Index("activity_pkey", ["id"], { unique: true })
@Entity("activity", { schema: "public" })
export class Activity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", {
    name: "activity_type",
    nullable: true,
    length: 100,
  })
  activityType: string | null;

  @Column("character varying", {
    name: 'currency',
    nullable: true,
    length: 100
  })
  currency: string

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

  @OneToMany(
    () => BookingActivities,
    (bookingActivities) => bookingActivities.activity
  )
  bookingActivities: BookingActivities[]; 
}

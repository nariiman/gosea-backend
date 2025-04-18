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
import { Payment } from "./Payment";

@Index("invoice_pkey", ["id"], { unique: true })
@Entity("invoice", { schema: "public" })
export class Invoice {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", { name: "invoice_total", precision: 10, scale: 2 })
  invoiceTotal: string;

  @Column("timestamp without time zone", {
    name: "invoice_date",
    nullable: true,
    default: () => "now()",
  })
  invoiceDate: Date | null;

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

  @ManyToOne(() => Booking, (booking) => booking.invoices, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "booking_id", referencedColumnName: "id" }])
  booking: Booking;

  @OneToMany(() => Payment, (payment) => payment.invoice)
  payments: Payment[];
}

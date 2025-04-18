import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Payment } from "./Payment";

@Index("visa_payment_pkey", ["id"], { unique: true })
@Entity("visa_payment", { schema: "public" })
export class VisaPayment {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("date", { name: "expiry_date" })
  expiryDate: string;

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

  @ManyToOne(() => Payment, (payment) => payment.visaPayments, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "payment_id", referencedColumnName: "id" }])
  payment: Payment;
}

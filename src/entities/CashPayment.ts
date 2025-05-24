import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Payment } from './Payment';

@Index('cash_payment_pkey', ['id'], { unique: true })
@Entity('cash_payment', { schema: 'public' })
export class CashPayment {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'currency', length: 10 })
  currency: string;

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

  @ManyToOne(() => Payment, (payment) => payment.cashPayments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'payment_id', referencedColumnName: 'id' }])
  payment: Payment;
}

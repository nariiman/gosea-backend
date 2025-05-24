import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CashPayment } from './CashPayment';
import { Invoice } from './Invoice';
import { VisaPayment } from './VisaPayment';

@Index('payment_pkey', ['id'], { unique: true })
@Entity('payment', { schema: 'public' })
export class Payment {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('numeric', { name: 'total', precision: 10, scale: 2 })
  total: string;

  @Column('timestamp without time zone', {
    name: 'payment_date',
    nullable: true,
    default: () => 'now()',
  })
  paymentDate: Date | null;

  @Column('character varying', {
    name: 'payment_type',
    nullable: true,
    length: 50,
  })
  paymentType: string | null;

  @Column('character varying', {
    name: 'payment_status',
    nullable: true,
    length: 50,
    default: () => "'Pending'",
  })
  paymentStatus: string | null;

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

  @OneToMany(() => CashPayment, (cashPayment) => cashPayment.payment)
  cashPayments: CashPayment[];

  @ManyToOne(() => Invoice, (invoice) => invoice.payments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @OneToMany(() => VisaPayment, (visaPayment) => visaPayment.payment)
  visaPayments: VisaPayment[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TransportCompany } from './TransportCompany';

@Index('transport_request_pkey', ['id'], { unique: true })
@Entity('transport_request', { schema: 'public' })
export class TransportRequest {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'request_type',
    nullable: true,
    length: 100,
  })
  requestType: string | null;

  @Column('text', { name: 'request_description', nullable: true })
  requestDescription: string | null;

  @Column('character varying', {
    name: 'status',
    nullable: true,
    length: 50,
    default: () => "'Pending'",
  })
  status: string | null;

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

  @ManyToOne(
    () => TransportCompany,
    (transportCompany) => transportCompany.transportRequests,
    { onDelete: 'SET NULL' },
  )
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  company: TransportCompany;
}

import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TransportRequest } from "./TransportRequest";

@Index("transport_company_pkey", ["id"], { unique: true })
@Index("transport_company_license_key", ["license"], { unique: true })
@Entity("transport_company", { schema: "public" })
export class TransportCompany {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("character varying", { name: "license", unique: true, length: 100 })
  license: string;

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

  @OneToMany(
    () => TransportRequest,
    (transportRequest) => transportRequest.company
  )
  transportRequests: TransportRequest[];
}

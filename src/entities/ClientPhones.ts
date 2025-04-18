import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClientProfile } from "./ClientProfile";

@Index("client_phones_pkey", ["id"], { unique: true })
@Index("client_phones_phone_key", ["phone"], { unique: true })
@Entity("client_phones", { schema: "public" })
export class ClientPhones {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "phone", unique: true, length: 20 })
  phone: string;

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

  @ManyToOne(
    () => ClientProfile,
    (clientProfile) => clientProfile.clientPhones,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: ClientProfile;
}

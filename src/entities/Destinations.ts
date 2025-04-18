import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("destinations", { schema: "public" })
export class Destinations {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", { name: "imageUrl", nullable: true })
  imageUrl: string | null;

  @Column("boolean", { name: "isActive", default: () => "true" })
  isActive: boolean;
}

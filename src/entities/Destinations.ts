import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Activity } from './Activity';
import { Yacht } from './Yacht';
import { Catering } from './Catering';

@Entity('destinations', { schema: 'public' })
export class Destinations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', { name: 'name', nullable: false })
  name: string;

  @Column('character varying', { name: 'description', nullable: true })
  description: string | null;

  @Column('character varying', { name: 'imageUrl', nullable: true })
  imageUrl: string | null;

  @Column('boolean', { name: 'isActive', default: () => 'true' })
  isActive: boolean;

  @OneToMany(() => Activity, (activity) => activity.destination)
  activities: Activity[];

  @OneToMany(() => Yacht, (yacht) => yacht.destination)
  yachts: Yacht[];

  @OneToMany(() => Catering, (catering) => catering.destination)
  caterings: Catering[];
}

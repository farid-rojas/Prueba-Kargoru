import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quotes {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  document: number;

  @Column()
  name: string;

  @Column()
  weigth: string;

  @Column()
  addressSource: string;

  @Column()
  addressDestination: string;
}

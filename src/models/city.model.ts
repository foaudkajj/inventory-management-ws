import { Country } from './country.model';
import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn} from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 50, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

  @Column({ name: 'country_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  countryId: string;

  @ManyToOne(() => Country, (country) => country.id)
  @JoinColumn({ name: 'country_id' })
  country: Country

}

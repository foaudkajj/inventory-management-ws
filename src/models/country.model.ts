import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { City } from './city.model';

@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 50, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

}

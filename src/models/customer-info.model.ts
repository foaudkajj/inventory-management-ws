import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class CustomerInfo {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 50, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

  @Column({length: 50, name: 'phone'})
  @ApiProperty({required: false, type: 'string'})
  phone: string;

  @Column({length: 50, name: 'accent_insensitive_name'})
  @ApiProperty({required: true, type: 'string'})
  accent_insensitive_name: string;
}

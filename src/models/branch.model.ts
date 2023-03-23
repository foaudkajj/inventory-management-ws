import { City, Country, Merchant } from 'src/models';
import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 50, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

  @Column({length: 36, name: 'city_id'})
 @ApiProperty({ required: true, format: 'uuid' })
  cityId: string;

  @ManyToOne(() => City, (city) => city.id)
  @JoinColumn({ name: 'city_id' })
  city: City
  
  @Column({length: 36, name: 'country_id'})
 @ApiProperty({ required: true, format: 'uuid' })
  countryId: string;

  @ManyToOne(() => Country, (country) => country.id)
  @JoinColumn({ name: 'country_id' })
  country: Country

  @Column({length: 36, name: 'merchant_id'})
 @ApiProperty({ required: true, format: 'uuid' })
  merchantId: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.id)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant

}

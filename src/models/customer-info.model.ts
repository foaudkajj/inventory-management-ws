import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Merchant } from './merchant.model';

@Entity()
export class CustomerInfo {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 50, name: 'name' })
  @ApiProperty({ required: true, type: 'string' })
  name: string;

  @Column({ length: 50, name: 'phone' })
  @ApiProperty({ required: false, type: 'string' })
  phone?: string;

  @Column({ length: 50, name: 'accent_insensitive_name' })
  @ApiProperty({ required: true, type: 'string' })
  accentInsensitiveName: string;

  @Column({ length: 36, name: 'merchant_id' })
  merchantId: string

  @ManyToOne(() => Merchant, merchant => merchant.id)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant
}

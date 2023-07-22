import { Merchant } from 'src/models';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 50, name: 'name' })
  @ApiProperty({ required: true, type: 'string' })
  name: string;

  @Column({ name: 'merchant_id' })
  merchantId: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.id)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant
}

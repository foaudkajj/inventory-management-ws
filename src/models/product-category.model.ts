import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Merchant, Product } from 'src/models';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 100, name: 'name' })
  @ApiProperty({ required: true, type: 'string' })
  name: string;

  @Column({ length: 36, name: 'merchant_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  merchantId: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.id)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant

  @Column({ length: 36, name: 'product_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  productId: string;

  @OneToMany(() => Product, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: Product
}

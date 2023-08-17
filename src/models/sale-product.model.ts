import {ApiProperty} from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Product} from './product.model';
import {Sale} from './sale.model';

@Entity()
export class SaleProduct {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 36, name: 'sale_id'})
  @ApiProperty({required: true, format: 'uuid'})
  saleId: string;

  @Column({length: 36, name: 'product_id'})
  @ApiProperty({required: true, format: 'uuid'})
  productId: string;

  @Column({name: 'product_count'})
  @ApiProperty({required: true, type: 'int'})
  productCount: number;

  @Column({precision: 8, scale: 2, name: 'price'})
  @ApiProperty({required: true, type: 'decimal'})
  price: number;

  @Column({precision: 8, scale: 2, name: 'selling_price'})
  @ApiProperty({required: true, type: 'decimal'})
  sellingPrice: number;

  @OneToMany(() => Sale, sale => sale.id)
  @JoinColumn({name: 'sale_id'})
  sale: Sale;

  @OneToMany(() => Product, product => product.id)
  @JoinColumn({name: 'product_id'})
  product: Product;
}

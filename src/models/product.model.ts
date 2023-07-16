import { Genders } from './enums';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Branch } from './branch.model';
import { ProductCategory } from './product-category.model';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 100, name: 'name' })
  @ApiProperty({ required: true, type: 'string' })
  name: string;

  @Column({ length: 50, name: 'barcode' })
  @ApiProperty({ required: true, type: 'string' })
  barcode: string;

  @Column({ length: 50, name: 'short_code' })
  @ApiProperty({ required: false, type: 'string' })
  shortCode?: string;

  @Column({ length: 36, name: 'color_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  colorId: string;

  @Column({ name: 'gender' })
  @ApiProperty({ type: 'enum', enum: Genders })
  gender?: Genders;

  @Column({ precision: 8, scale: 2, name: 'price' })
  @ApiProperty({ required: true, type: 'decimal' })
  price: number;

  @Column({ name: 'size' })
  @ApiProperty({ required: false, type: 'int' })
  size?: number;

  @Column({ name: 'quantity' })
  @ApiProperty({ required: true, type: 'int' })
  quantity: number;

  @Column({ length: 36, name: 'branch_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  branchId: string;

  @Column({ precision: 8, scale: 2, name: 'selling_price' })
  @ApiProperty({ required: true, type: 'decimal' })
  sellingPrice: number;

  @Column({ length: 1000, name: 'description' })
  @ApiProperty({ required: false, type: 'string' })
  description?: string;

  @Column({ length: 200, name: 'picture_url' })
  @ApiProperty({ required: false, type: 'string' })
  pictureUrl?: string;

  @Column({ length: 36, name: 'unit_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  unitId: string;

  @Column({ length: 36, name: 'category_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  categoryId: string;


  @ManyToOne(() => Branch, (branch) => branch.productList)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch

  @ManyToOne(() => ProductCategory, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  category: ProductCategory
}

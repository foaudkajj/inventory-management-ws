import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import { GenericListItem } from './generic-list-item.model';
import { ProductCategory } from './product-category.model';

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 500, name: 'title' })
  @ApiProperty({ required: true, type: 'string' })
  title: string;

  @Column({ name: 'company_type' })
  @ApiProperty({ required: true, format: 'uuid' })
  genericListId: string;

  @ManyToOne(() => GenericListItem, (genericlistitem) => genericlistitem.id)
  @JoinColumn({ name: 'company_type' })
  genericlistitem: GenericListItem

  @Column({ name: 'founding_date' })
  @ApiProperty({ required: false, type: 'datetime' })
  foundingDate: Date;

  @Column({ length: 300, name: 'tax_office' })
  @ApiProperty({ required: false, type: 'string' })
  taxOffice: string;

  @Column({ length: 50, name: 'tax_number' })
  @ApiProperty({ required: false, type: 'string' })
  taxNumber: string;


  @Column({ length: 20, name: 'phone' })
  @ApiProperty({ required: false, type: 'string' })
  phone: string;

  @Column({ length: 50, name: 'website' })
  @ApiProperty({ required: false, type: 'string' })
  website: string;

  @OneToMany(() => ProductCategory, (category) => category.id)
  category: ProductCategory[]
}

import {ApiProperty} from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Product} from 'src/models';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 100, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

  @OneToMany(() => Product, product => product.id)
  product: Product[];
}

import {ApiProperty} from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Branch} from './branch.model';
import {User} from './user.model';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({name: 'date'})
  @ApiProperty({required: true, type: 'datetime'})
  date: Date;

  @Column({precision: 8, scale: 2, name: 'total'})
  @ApiProperty({required: true, type: 'decimal'})
  total: number;

  @Column({length: 36, name: 'user_id'})
  @ApiProperty({required: true, format: 'uuid'})
  userId: string;

  @Column({length: 36, name: 'merchant_id'})
  @ApiProperty({required: true, format: 'uuid'})
  merchantId: string;

  @Column({length: 36, name: 'branch_id'})
  @ApiProperty({required: true, format: 'uuid'})
  branchId: string;

  @Column({length: 36, name: 'customer_info_id'})
  @ApiProperty({required: true, format: 'uuid'})
  customerInfoId: string;

  @ManyToOne(() => Branch, branch => branch.saleList)
  @JoinColumn({name: 'branch_id'})
  branch: Branch;

  @ManyToOne(() => User, user => user.saleList)
  @JoinColumn({name: 'user_id'})
  user: User;
}

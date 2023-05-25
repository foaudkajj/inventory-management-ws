import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentMethod } from './payment-method.model';
import { Sale } from './sale.model';

@Entity()
export class SalePaymentMethod {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 36, name: 'sale_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  saleId: string;

  @Column({ length: 36, name: 'payment_method_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  paymentMethodId: string;

  @Column({ precision: 8, scale: 2, name: 'amount' })
  @ApiProperty({ required: true, type: 'decimal' })
  amount: number;

  @OneToMany(() => Sale, (sale) => sale.id)
  @JoinColumn({ name: 'sale_id' })
  sale: Sale

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.id)
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethod
}
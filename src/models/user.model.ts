import { UserStatus } from './enums';
import { Branch, Merchant, Role, Sale } from 'src/models';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 50, name: 'first_name' })
  @ApiProperty({ required: true, type: 'string' })
  firstName: string;

  @Column({ length: 50, name: 'last_name' })
  @ApiProperty({ required: true, type: 'string' })
  lastName: string;

  @Column({ length: 50, name: 'username' })
  @ApiProperty({ required: true, type: 'string' })
  username: string;

  @Column({ length: 50, name: 'status' })
  @ApiProperty({ type: 'enum', enum: UserStatus, default: UserStatus.Active })
  status: UserStatus;

  @Column({ length: 200, name: 'password' })
  @ApiProperty({ required: false, type: 'string' })
  password: string;

  @Column({ length: 200, name: 'picture_url' })
  @ApiProperty({ required: false, type: 'string' })
  pictureUrl: string;

  @Column({ length: 50, name: 'email' })
  @ApiProperty({ required: false, type: 'string' })
  email: string;

  @Column({ length: 30, name: 'gsm' })
  @ApiProperty({ required: false, type: 'string' })
  gsm: string;

  @Column({ length: 100, name: 'salt' })
  @ApiProperty({ required: false, type: 'string' })
  salt: string;

  @Column({ length: 36, name: 'branch_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  branchId: string;

  @ManyToOne(() => Branch, (branch) => branch.id)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch

  @Column({ length: 36, name: 'role_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  roleId: string;

  @ManyToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: 'role_id' })
  role: Role


  @Column({ length: 36, name: 'merchant_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  merchantId: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.id)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant

  @OneToMany(() => Sale, (sale) => sale.user)
  saleList: Sale[]
}

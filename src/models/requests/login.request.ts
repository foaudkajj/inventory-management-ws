import {ApiProperty} from '@nestjs/swagger';
import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class LoginRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({required: true, type: 'string'})
  username: string;

  @ApiProperty({required: true, type: 'string'})
  password: string;
}

import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn} from 'typeorm';
import { GenericList } from './generic-list.model';

@Entity()
export class GenericListItem {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 100, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

  @Column({ name: 'list_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  genericListId: string;

  @ManyToOne(() => GenericList, (genericlist) => genericlist.id)
  @JoinColumn({ name: 'list_id' })
  genericlist: GenericList

}

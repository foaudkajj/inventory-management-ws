import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import { Customer_info } from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class Customer_infoRepository extends BaseRepository<Customer_info> {
  constructor(
    @InjectRepository(Customer_info)
    private _: Repository<Customer_info>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
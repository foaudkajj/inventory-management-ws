import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import { Sale } from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class SaleRepository extends BaseRepository<Sale> {
  constructor(
    @InjectRepository(Sale)
    private _: Repository<Sale>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
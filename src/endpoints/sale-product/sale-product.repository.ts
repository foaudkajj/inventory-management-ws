import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import { SaleProduct } from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class SaleProductRepository extends BaseRepository<SaleProduct> {
  constructor(
    @InjectRepository(SaleProduct)
    private _: Repository<SaleProduct>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
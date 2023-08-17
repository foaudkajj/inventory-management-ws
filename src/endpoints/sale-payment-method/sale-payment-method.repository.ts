import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {SalePaymentMethod} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class SalePaymentMethodRepository extends BaseRepository<SalePaymentMethod> {
  constructor(
    @InjectRepository(SalePaymentMethod)
    private _: Repository<SalePaymentMethod>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}

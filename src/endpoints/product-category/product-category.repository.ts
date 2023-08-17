import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {ProductCategory} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class ProductCategoryRepository extends BaseRepository<ProductCategory> {
  constructor(
    @InjectRepository(ProductCategory)
    private _: Repository<ProductCategory>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}

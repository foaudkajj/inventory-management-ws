import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {GenericList} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class GenericListRepository extends BaseRepository<GenericList> {
  constructor(
    @InjectRepository(GenericList)
    private _: Repository<GenericList>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}

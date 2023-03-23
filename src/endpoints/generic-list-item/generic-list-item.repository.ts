import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import { GenericListItem } from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class GenericListItemRepository extends BaseRepository<GenericListItem> {
  constructor(
    @InjectRepository(GenericListItem)
    private _: Repository<GenericListItem>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
import {Injectable} from '@nestjs/common';
import {GenericListItem} from 'src/models';
import {GenericListItemRepository} from './generic-list-item.repository';

@Injectable()
export class GenericListItemService {
  constructor(private GenericListItemRepository: GenericListItemRepository) {}
  getAll(): Promise<GenericListItem[]> {
    return this.GenericListItemRepository.orm.find();
  }

  insert(row: GenericListItem) {
    return this.GenericListItemRepository.orm.insert(row);
  }

  update(row: Partial<GenericListItem>, id: string) {
    return this.GenericListItemRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.GenericListItemRepository.orm.delete({id: id});
  }
}

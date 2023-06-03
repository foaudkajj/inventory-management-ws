import { Injectable } from '@nestjs/common';
import { GenericListItem } from 'src/models';
import { GenericListItemRepository } from './generic-list-item.repository';
import { FindManyOptions } from 'typeorm';

@Injectable()
export class GenericListItemService {
  constructor(private genericListItemRepository: GenericListItemRepository) { }


  getAll(options?: FindManyOptions<GenericListItem>): Promise<GenericListItem[]> {
    return this.genericListItemRepository.orm.find(options);
  }

  insert(row: GenericListItem) {
    return this.genericListItemRepository.orm.insert(row);
  }

  update(row: Partial<GenericListItem>, id: string) {
    return this.genericListItemRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.genericListItemRepository.orm.delete({ id: id });
  }
}

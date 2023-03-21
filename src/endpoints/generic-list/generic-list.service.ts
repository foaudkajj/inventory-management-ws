import {Injectable} from '@nestjs/common';
import {GenericList} from 'src/models';
import {GenericListRepository} from './generic-list.repository';

@Injectable()
export class GenericListService {
  constructor(private GenericListRepository: GenericListRepository) {}
  getAll(): Promise<GenericList[]> {
    return this.GenericListRepository.orm.find();
  }

  insert(row: GenericList) {
    return this.GenericListRepository.orm.insert(row);
  }

  update(row: Partial<GenericList>, id: string) {
    return this.GenericListRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.GenericListRepository.orm.delete({id: id});
  }
}

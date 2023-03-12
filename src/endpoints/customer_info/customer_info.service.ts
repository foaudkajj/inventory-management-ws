import {Injectable} from '@nestjs/common';
import {Customer_info} from 'src/models';
import {Customer_infoRepository} from './customer_info.repository';

@Injectable()
export class Customer_infoService {
  constructor(private Customer_infoRepository: Customer_infoRepository) {}
  getAll(): Promise<Customer_info[]> {
    return this.Customer_infoRepository.orm.find();
  }

  insert(row: Customer_info) {
    return this.Customer_infoRepository.orm.insert(row);
  }

  update(row: Partial<Customer_info>, id: string) {
    return this.Customer_infoRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.Customer_infoRepository.orm.delete({id: id});
  }
}

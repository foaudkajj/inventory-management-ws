import {Injectable} from '@nestjs/common';
import {CustomerInfo} from 'src/models';
import {CustomerInfoRepository} from './customer-info.repository';

@Injectable()
export class CustomerInfoService {
  constructor(private CustomerInfoRepository: CustomerInfoRepository) {}
  getAll(): Promise<CustomerInfo[]> {
    return this.CustomerInfoRepository.orm.find();
  }

  insert(row: CustomerInfo) {
    return this.CustomerInfoRepository.orm.insert(row);
  }

  update(row: Partial<CustomerInfo>, id: string) {
    return this.CustomerInfoRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.CustomerInfoRepository.orm.delete({id: id});
  }
}
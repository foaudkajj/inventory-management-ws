import {Injectable} from '@nestjs/common';
import {CustomerInfo} from 'src/models';
import {CustomerInfoRepository} from './customer-info.repository';

@Injectable()
export class CustomerInfoService {
  constructor(private customerInfoRepository: CustomerInfoRepository) {}
  getAll(): Promise<CustomerInfo[]> {
    return this.customerInfoRepository.orm.find();
  }

  insert(row: CustomerInfo) {
    return this.customerInfoRepository.orm.insert(row);
  }

  update(row: Partial<CustomerInfo>, id: string) {
    return this.customerInfoRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.customerInfoRepository.orm.delete({id: id});
  }
}
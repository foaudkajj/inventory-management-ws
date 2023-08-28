import { Injectable } from '@nestjs/common';
import { CustomerInfo } from 'src/models';
import { CustomerInfoRepository } from './customer-info.repository';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class CustomerInfoService {
  constructor(private customerInfoRepository: CustomerInfoRepository,
    private readonly cls: ClsService,
  ) { }
  getAll(): Promise<CustomerInfo[]> {
    return this.customerInfoRepository.orm.find();
  }

  insert(row: CustomerInfo) {
    row.merchantId = this.cls.get('user.merchantId');
    return this.customerInfoRepository.orm.insert(row);
  }

  update(row: Partial<CustomerInfo>, id: string) {
    row.merchantId = this.cls.get('user.merchantId');
    return this.customerInfoRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.customerInfoRepository.orm.delete({ id: id });
  }
}

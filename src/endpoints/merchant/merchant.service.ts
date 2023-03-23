import {Injectable} from '@nestjs/common';
import {Merchant} from 'src/models';
import {MerchantRepository} from './merchant.repository';

@Injectable()
export class MerchantService {
  constructor(private MerchantRepository: MerchantRepository) {}
  getAll(): Promise<Merchant[]> {
    return this.MerchantRepository.orm.find();
  }

  insert(row: Merchant) {
    return this.MerchantRepository.orm.insert(row);
  }

  update(row: Partial<Merchant>, id: string) {
    return this.MerchantRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.MerchantRepository.orm.delete({id: id});
  }
}

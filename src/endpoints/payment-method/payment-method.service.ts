import { PaymentMethodRepository } from './payment-method.repository';
import {Injectable} from '@nestjs/common';
import {PaymentMethod} from 'src/models';

@Injectable()
export class PaymentMethodService {
  constructor(private PaymentMethodRepository: PaymentMethodRepository) {}
  getAll(): Promise<PaymentMethod[]> {
    return this.PaymentMethodRepository.orm.find();
  }

  insert(row: PaymentMethod) {
    return this.PaymentMethodRepository.orm.insert(row);
  }

  update(row: Partial<PaymentMethod>, id: string) {
    return this.PaymentMethodRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.PaymentMethodRepository.orm.delete({id: id});
  }
}

import { PaymentMethodRepository } from './payment-method.repository';
import { Injectable } from '@nestjs/common';
import { PaymentMethod } from 'src/models';
import { In } from 'typeorm';

@Injectable()
export class PaymentMethodService {
  constructor(private paymentMethodRepository: PaymentMethodRepository) { }
  getAll(): Promise<PaymentMethod[]> {
    return this.paymentMethodRepository.orm.find();
  }

  insert(row: PaymentMethod) {
    return this.paymentMethodRepository.orm.insert(row);
  }

  update(row: Partial<PaymentMethod>, id: string) {
    return this.paymentMethodRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.paymentMethodRepository.orm.delete({ id: id });
  }
  getByIds(ids: string[]) {
    return this.paymentMethodRepository.orm.findBy({ id: In(ids) })
  }
}
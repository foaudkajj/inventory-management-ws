import { Injectable } from '@nestjs/common';
import { SalePaymentMethod } from 'src/models';
import { SalePaymentMethodRepository } from './sale-payment-method.repository';

@Injectable()
export class SalePaymentMethodService {
  constructor(private salePaymentMethodRepository: SalePaymentMethodRepository) { }
  getAll(): Promise<SalePaymentMethod[]> {
    return this.salePaymentMethodRepository.orm.find();
  }

  insert(row: SalePaymentMethod | SalePaymentMethod[]) {
    return this.salePaymentMethodRepository.orm.insert(row);
  }

  update(row: Partial<SalePaymentMethod>, id: string) {
    return this.salePaymentMethodRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.salePaymentMethodRepository.orm.delete({ id: id });
  }
}

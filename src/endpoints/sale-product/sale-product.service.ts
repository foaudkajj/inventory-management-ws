import {Injectable} from '@nestjs/common';
import {SaleProduct} from 'src/models';
import {SaleProductRepository} from './sale-product.repository';

@Injectable()
export class SaleProductService {
  constructor(private saleProductRepository: SaleProductRepository) {}
  getAll(): Promise<SaleProduct[]> {
    return this.saleProductRepository.orm.find();
  }

  insert(row: SaleProduct | SaleProduct[]) {
    return this.saleProductRepository.orm.insert(row);
  }

  update(row: Partial<SaleProduct>, id: string) {
    return this.saleProductRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.saleProductRepository.orm.delete({id: id});
  }
}

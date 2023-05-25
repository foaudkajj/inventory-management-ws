import {Injectable} from '@nestjs/common';
import {Sale} from 'src/models';
import {SaleRepository} from './sale.repository';

@Injectable()
export class SaleService {
  constructor(private saleRepository: SaleRepository) {}
  getAll(): Promise<Sale[]> {
    return this.saleRepository.orm.find();
  }

  insert(row: Sale) {
    return this.saleRepository.orm.insert(row);
  }

  update(row: Partial<Sale>, id: string) {
    return this.saleRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.saleRepository.orm.delete({id: id});
  }
}

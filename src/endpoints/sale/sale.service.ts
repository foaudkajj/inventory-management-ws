import {Injectable} from '@nestjs/common';
import {SaleRepository} from './sale.repository';
import {Sale} from 'src/models';

@Injectable()
export class SaleService {
  constructor(private saleRepository: SaleRepository) {}

  insert(row: Sale) {
    return this.saleRepository.orm.insert(row);
  }
}

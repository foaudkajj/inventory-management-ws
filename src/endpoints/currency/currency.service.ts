import {Injectable} from '@nestjs/common';
import {Currency} from 'src/models';
import {CurrencyRepository} from './Currency.repository';

@Injectable()
export class CurrencyService {
  constructor(private CurrencyRepository: CurrencyRepository) {}
  getAll(): Promise<Currency[]> {
    return this.CurrencyRepository.orm.find();
  }

  insert(row: Currency) {
    return this.CurrencyRepository.orm.insert(row);
  }

  update(row: Partial<Currency>, id: string) {
    return this.CurrencyRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.CurrencyRepository.orm.delete({id: id});
  }
}

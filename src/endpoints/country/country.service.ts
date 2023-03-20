import {Injectable} from '@nestjs/common';
import {Country} from 'src/models';
import {CountryRepository} from './country.repository';

@Injectable()
export class CountryService {
  constructor(private CountryRepository: CountryRepository) {}
  getAll(): Promise<Country[]> {
    return this.CountryRepository.orm.find();
  }

  insert(row: Country) {
    return this.CountryRepository.orm.insert(row);
  }

  update(row: Partial<Country>, id: string) {
    return this.CountryRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.CountryRepository.orm.delete({id: id});
  }
}

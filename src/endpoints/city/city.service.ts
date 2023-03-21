import {Injectable} from '@nestjs/common';
import {City} from 'src/models';
import {CityRepository} from './city.repository';

@Injectable()
export class CityService {
  constructor(private CityRepository: CityRepository) {}
  getAll(): Promise<City[]> {
    return this.CityRepository.orm.find();
  }

  insert(row: City) {
    return this.CityRepository.orm.insert(row);
  }

  update(row: Partial<City>, id: string) {
    return this.CityRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.CityRepository.orm.delete({id: id});
  }
}

import {Injectable} from '@nestjs/common';
import {Role} from 'src/models';
import {RoleRepository} from './role.repository';

@Injectable()
export class RoleService {
  constructor(private RoleRepository: RoleRepository) {}
  getAll(): Promise<Role[]> {
    return this.RoleRepository.orm.find();
  }

  insert(row: Role) {
    return this.RoleRepository.orm.insert(row);
  }

  update(row: Partial<Role>, id: string) {
    return this.RoleRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.RoleRepository.orm.delete({id: id});
  }
}

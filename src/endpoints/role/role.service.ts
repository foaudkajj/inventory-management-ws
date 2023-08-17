import {Injectable} from '@nestjs/common';
import {Role} from 'src/models';
import {RoleRepository} from './role.repository';
import {ClsService} from 'nestjs-cls';

@Injectable()
export class RoleService {
  constructor(
    private roleRepository: RoleRepository,
    private readonly cls: ClsService,
  ) {}
  getAll(): Promise<Role[]> {
    return this.roleRepository.orm.find();
  }

  insert(row: Role) {
    row.merchantId = this.cls.get('user.merchantId');
    return this.roleRepository.orm.insert(row);
  }

  update(row: Partial<Role>, id: string) {
    row.merchantId = this.cls.get('user.merchantId');
    return this.roleRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.roleRepository.orm.delete({id: id});
  }
}

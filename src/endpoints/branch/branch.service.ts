import {Injectable} from '@nestjs/common';
import {Branch} from 'src/models';
import {BranchRepository} from './branch.repository';
import {ClsService} from 'nestjs-cls';

@Injectable()
export class BranchService {
  constructor(
    private branchRepository: BranchRepository,
    private readonly cls: ClsService,
  ) {}
  getAll(): Promise<Branch[]> {
    return this.branchRepository.orm.find();
  }

  insert(row: Branch) {
    row.merchantId = this.cls.get('user.merchantId');
    return this.branchRepository.orm.insert(row);
  }

  update(row: Partial<Branch>, id: string) {
    row.merchantId = this.cls.get('user.merchantId');
    return this.branchRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.branchRepository.orm.delete({id: id});
  }
}

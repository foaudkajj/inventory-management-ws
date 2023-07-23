import { User } from 'src/models';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcryptjs';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class UserService {

  constructor(private userRepository: UserRepository, private readonly cls: ClsService) { }
  getAll(): Promise<User[]> {
    return this.userRepository.orm.find();
  }

  async insert(row: User) {
    const salt = await genSalt(10)
    const hashString = await hash(row.password, salt)
    row.password = hashString;
    row.salt = salt;
    row.merchantId = this.cls.get('user.merchantId');
    return this.userRepository.orm.insert(row);
  }

  async update(row: Partial<User>, id: string) {
    if (row.password) {
      const salt = await genSalt(10)
      const hashString = await hash(row.password, salt)
      row.password = hashString;
      row.salt = salt;
    }
    row.merchantId = this.cls.get('user.merchantId');
    return this.userRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.userRepository.orm.delete({ id: id });
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.orm.findOne({ where: { username: username } });

  }
}

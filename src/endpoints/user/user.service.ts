import { LoginRequest } from './../../models/login-request';
import { User } from 'src/models';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  constructor(private userRepository: UserRepository) { }
  getAll(): Promise<User[]> {
    return this.userRepository.orm.find();
  }

  async insert(row: User) {
    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(row.password, salt)
    row.password = hash;
    row.salt = salt;
    return this.userRepository.orm.insert(row);
  }

  async update(row: Partial<User>, id: string) {
    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(row.password, salt)
    row.password = hash;
    row.salt = salt;
    return this.userRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.userRepository.orm.delete({ id: id });
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.orm.findOne({ where: { username: username } });

  }
}

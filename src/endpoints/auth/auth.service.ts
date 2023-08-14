import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginRequest, User } from 'src/models';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async signIn(
    userReq: LoginRequest,
  ): Promise<{ access_token: string; user: User }> {
    const user = await this.userService.findOne(userReq.username);
    if (!user) {
      throw new HttpException('ERROR.WRONG_USERNAME', HttpStatus.UNAUTHORIZED);
    }
    const hash = await compare(userReq.password, user.password);
    if (!hash) {
      throw new HttpException(
        'ERROR.WRONG_USERNAME_PASSWORD',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = {
      userId: user.id,
      username: user.username,
      merchantId: user.merchantId,
      branchId: user.branchId,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }
}

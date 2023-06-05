import { LoginRequest } from '../../models/login-request';
import { UserService } from "../user/user.service";
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signIn(userReq: LoginRequest): Promise<any> {

        const user = await this.userService.findOne(userReq.username);
        const bcrypt = await require('bcryptjs');
        const hash = await bcrypt.compare(userReq.password, user.password);
        if (!hash) {
            throw new HttpException(
                'ERROR.WRONG_USERNAME_PASSWORD',
                HttpStatus.UNAUTHORIZED,
            );
        }

        const payload = { sub: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
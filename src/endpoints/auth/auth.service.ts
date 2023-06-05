import { UserService } from "../user/user.service";
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRequest } from "src/models";
import { compare } from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signIn(userReq: LoginRequest): Promise<any> {

        const user = await this.userService.findOne(userReq.username);
        const hash = await compare(userReq.password, user.password);
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
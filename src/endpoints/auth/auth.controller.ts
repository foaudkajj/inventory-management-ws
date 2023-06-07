import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from 'src/models/requests/login.request';
import { Public } from './is-public';

@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post('login')
    signIn(@Body() loginRequest: LoginRequest) {
        return this.authService.signIn(loginRequest);
    }
}
import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { request } from 'http';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request()req) {
        return this.AuthService.login(req.user);
    }
}

import { Body, Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import type { registerDTO, loginDTO } from './dtos/auth';
import { AuthService } from './auth.service'; 
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}


    @Post('register')
    async register(@Body() body: registerDTO) {
    return this.authService.register(body)
    }

    @Post('login')
    async login(@Body() body:loginDTO) {
      return this.authService.login(body)
    }
    @UseGuards(AuthGuard)

    @Get('me')
    async me(@Request() request) {
        return request.usuario;
    }


}

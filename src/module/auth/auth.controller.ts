/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Patch, Put } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto, registerDto } from 'src/core/dto/auth.dto';

@Controller('auth')
export class AuthController {


    constructor(private readonly _AuthService: AuthService) { }

    @Post('login')
    async login(@Body() body: loginDto): Promise<any> {
        return this._AuthService.login(body);
    }

    @Post('register')
    async register(@Body() body: registerDto) {
        return this._AuthService.register(body);
    }

    @Put('update')
    async update(): Promise<any> {
        return 'update';
    }

    @Patch('change-password')
    async changePassword(): Promise<any> {
        return 'change-password';
    }

    @Delete()
    async delete(): Promise<any> {
        return 'delete';
    }
}

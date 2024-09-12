/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Patch, Put, Req, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { changePasswordDto, loginDto, registerDto, updateUserDto } from 'src/core/dto/auth.dto';
import { AuthGuard } from 'src/core/guard/auth.guard';

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

    @Put('update-user')
    @UseGuards(AuthGuard)
    async update(@Body() body: updateUserDto, @Req() req: any): Promise<any> {
        body.userId = req.user.userId
        return this._AuthService.updateUser(body);
    }

    @Patch('change-password')
    async changePassword(@Body() body: changePasswordDto, @Req() req: any): Promise<any> {
        body.userId = req.user.userId
        return this._AuthService.changePassword(body);
    }

    @Delete()
    async delete(): Promise<any> {
        return 'delete';
    }
}

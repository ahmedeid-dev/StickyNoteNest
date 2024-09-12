/* eslint-disable prettier/prettier */

import { IsEmail, IsStrongPassword, MaxLength, MinLength } from "class-validator";
export class registerDto {
    @MaxLength(20)
    @MinLength(3)
    name: string;
    @IsEmail()
    email: string;
    @IsStrongPassword()
    password: string;
}
export class loginDto {
    @IsEmail()
    email: string;
    @IsStrongPassword()
    password: string;
}
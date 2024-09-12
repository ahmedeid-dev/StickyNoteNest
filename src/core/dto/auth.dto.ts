/* eslint-disable prettier/prettier */

import { IsEmail, IsMongoId, IsOptional, IsStrongPassword, MaxLength, MinLength } from "class-validator";
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
export class updateUserDto {
    @IsOptional()
    @MaxLength(20)
    @MinLength(3)
    name: string;
    @IsEmail()
    @IsOptional()
    email: string;
    @IsOptional()
    @IsMongoId()
    userId: string
}
export class changePasswordDto {
    @IsStrongPassword()
    password: string;
    
    @IsOptional()
    @IsMongoId()
    userId: string
}
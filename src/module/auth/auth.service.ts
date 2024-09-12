/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.schema';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private UserModel: Model<User>,
        private _JwtService: JwtService) { }

    async register(user: any) {
        const isUserExist = await this.UserModel.findOne({ email: user.email })
        if (isUserExist) {
            throw new ConflictException('user already exist')
        }
        const newUser = await this.UserModel.create(user)
        const token = this._JwtService.sign({
            userId: newUser._id,
            userEmail: newUser.email
        }, { secret: 'secret', expiresIn: '1d' })

        newUser.password = undefined
        return { message: 'registered successfully ', token }
    }

    async login(user: any) {
        const isUserExist = await this.UserModel.findOne({ email: user.email })
        if (!(isUserExist && bcrypt.compareSync(user.password, isUserExist.password))) {
            throw new UnauthorizedException('invalid credentials')
        }

        const token = this._JwtService.sign({
            userId: isUserExist._id,
            userEmail: isUserExist.email
        }, { secret: 'secret', expiresIn: '1d' })

        isUserExist.password = undefined
        return { message: 'login successfully ', token }
    }
}

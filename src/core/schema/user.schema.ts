/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt'
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({
        required: true,
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 100
    })
    name: string;

    @Prop({
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 1000
    })
    email: string;

    @Prop({
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 1000
    })
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre('save', function () {
    this.password = bcrypt.hashSync(this.password, 10)
})
/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type NoteDocument = HydratedDocument<Note>;

@Schema()
export class Note {
    @Prop({
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    })
    title: string;

    @Prop({
        type: String,
        required: false,
        trim: true,
        minlength: 3,
        maxlength: 1000
    })
    description: number;

    @Prop({
        type: Types.ObjectId,
        ref: 'User',
        required: true
    })
    user: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);

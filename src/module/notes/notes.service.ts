/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from 'src/core/schema/notes.schema';

@Injectable()
export class NotesService {

    constructor(@InjectModel(Note.name) private NoteModel: Model<Note>) { }

    async addNote(note: Note): Promise<Note> {
        const newNote = await this.NoteModel.create(note);
        return newNote;
    }

    async getNotes(): Promise<Note[]> {
        const notes = await this.NoteModel.find();
        return notes;
    }

    async getNote(id: string): Promise<Note> {
        const note = await this.NoteModel.findById(id);
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        return note;
    }

    async updateNote(id: string, note: Note): Promise<Note> {
        const updatedNote = await this.NoteModel.findByIdAndUpdate(id, note, { new: true });
        if (!updatedNote) {
            throw new NotFoundException('Note not found');
        }
        return updatedNote;
    }

    async deleteNote(id: string): Promise<Note> {
        const deletedNote = await this.NoteModel.findByIdAndDelete(id);
        if (!deletedNote) {
            throw new NotFoundException('Note not found');
        }
        return deletedNote;
    }
}

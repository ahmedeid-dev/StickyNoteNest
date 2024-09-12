/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Request } from 'express';

@Controller('notes')
export class NotesController { }
// export class NotesController {
//     constructor(private readonly notesService: NotesService) { }

//     @Post()
//     async addNote(@Req() req: Request): Promise<any> {
//         const note = {
//             title: req.body.title,
//             description: req.body.description,
//             user: req.body.user
//         }
//         return { message: 'Note added successfully', data: await this.notesService.addNote(note) }
//     }

//     @Get()
//     async getNotes(): Promise<any> {
//         return { message: 'Notes fetched successfully', data: await this.notesService.getNotes() }
//     }

//     @Get(':id')
//     async getNote(@Req() req: Request): Promise<any> {
//         return { message: 'Note fetched successfully', data: await this.notesService.getNote(req.params.id) }
//     }

//     @Put(':id')
//     async updateNote(@Req() req: Request): Promise<any> {
//         return { message: 'Note updated successfully', data: await this.notesService.updateNote(req.params.id, req.body) }
//     }

//     @Delete(':id')
//     async deleteNote(@Req() req: Request): Promise<any> {
//         return { message: 'Note deleted successfully', data: await this.notesService.deleteNote(req.params.id) }
//     }
// }

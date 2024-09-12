/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './module/auth/auth.module';
import { NotesModule } from './module/notes/notes.module';

@Module({
  imports: [AuthModule, NotesModule, MongooseModule.forRoot('mongodb://localhost/stickynotenest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

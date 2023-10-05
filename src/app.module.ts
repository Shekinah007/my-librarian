import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'


@Module({
  // imports: [BookModule, MongooseModule.forRoot('mongodb://0.0.0.0:27017/bookDatabase'),],
  imports: [ConfigModule.forRoot(), BookModule, MongooseModule.forRoot("mongodb+srv://shalomsheks:shekssheks@nodetuts.m5oxomk.mongodb.net/bookDatabase")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }



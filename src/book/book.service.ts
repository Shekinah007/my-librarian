import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookSchema } from './dto/Book.dto';
import { AddBookDto } from './dto/AddBook.dto';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

    async getBooks() {
        return await this.bookModel.find()
    }
    async addBook(bookDto: AddBookDto) {
        let createdBook = await this.bookModel.create({ releaseDate: "UNKNOWN", ...bookDto });
        return createdBook.save()
    }

    async getBookByAuthor(author) {
        // return await this.bookModel.findOne({ author }).collation({ locale: 'en', strength: 2 })
        return await this.bookModel.find({
            author: {
                $regex: `${author}`, $options: 'i'
            }
        })
    }

    async getBookByTitle(title) {
        return await this.bookModel.find({ title: { $regex: `${title}`, $options: 'i' } })
    }
}
// db.InspirationalWomen.find({first_name: { $regex: /Harriet/i} })
// db.InspirationalWomen.find({ first_name: { $regex: /Harriet/i } })
// $regex: `^${talentPattern}`, $options: 'i'
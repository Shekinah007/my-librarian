import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Get()
    getBooks() {
        return this.bookService.getBooks()
    }

    @Post("book")
    getBookByAuthor(@Body("author") author) {
        return this.bookService.getBookByAuthor(author)
    }
}

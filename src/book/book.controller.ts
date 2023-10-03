import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { AddBookDto } from './dto/AddBook.dto';

@UsePipes(ValidationPipe)
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

    @Post("addBook")
    addNewBook(@Body() addBookDto: AddBookDto) {
        return this.bookService.addBook(addBookDto)
    }
}

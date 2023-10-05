import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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

    @Post("findBook")
    getBook(@Body("searchText") searchText) {
        return this.bookService.getBookByTitleOrAuthor(searchText)
    }

    @Post("findByAuthor")
    getBookByAuthor(@Body("author") author) {
        return this.bookService.getBookByAuthor(author)
    }


    @Post("findByTitle")
    getBookByTitle(@Body("title") title) {
        return this.bookService.getBookByTitle(title)
    }


    @Post("addBook")
    addNewBook(@Body() addBookDto: AddBookDto) {
        return this.bookService.addBook(addBookDto)
    }

    @Post("findById")
    getBookById(@Body("id") id: string) {
        return this.bookService.getBookById(id)
    }

    @Delete("deleteBook/:id")
    deleteBook(@Param("id") id: string) {
        return this.bookService.deleteBook(id)
    }


}

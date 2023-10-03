import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {

    getBooks() {
        return [
            {
                author: 'J.R.R. Tolkien',
                title: 'The Lord of the Rings',
                releaseDate: '1954-1955'
            },
            {
                author: 'Leo Tolstoy',
                title: 'War and Peace',
                releaseDate: '1869'
            },
            {
                author: 'Markus Zusak',
                title: 'The Book Thief',
                releaseDate: '2005'
            },
            {
                author: 'Gabriel Garcia Marquez',
                title: 'One Hundred Years of Solitude',
                releaseDate: '1967'
            },
            {
                author: 'George Orwell',
                title: '1984',
                releaseDate: '1949'
            },
            {
                author: 'J.D. Salinger',
                title: 'The Catcher in the Rye',
                releaseDate: '1951'
            },
            {
                author: 'Ernest Hemingway',
                title: 'The Old Man and the Sea',
                releaseDate: '1952'
            },
            {
                author: 'Agatha Christie',
                title: 'Murder on the Orient Express',
                releaseDate: '1934'
            },
            {
                author: 'Khaled Hosseini',
                title: 'The Kite Runner',
                releaseDate: '2003'
            },
            {
                author: 'Haruki Murakami',
                title: 'Norwegian Wood',
                releaseDate: '1987'
            }
        ]
    }

    getBookByAuthor(author) {
        let books = this.getBooks()
        return books.find(book => book.author === author)
    }
}

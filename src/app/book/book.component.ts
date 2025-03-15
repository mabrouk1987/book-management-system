import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  newBookTitle: string = '';
  newBookAuthor: string = '';

  books: Book[] = [];

  ngOnInit(): void {
    const storedBooks = localStorage.getItem('books');

    this.books = storedBooks ? JSON.parse(storedBooks) : [];
  }

  protected addBook(): void {
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      let newBook: Book = {
        id: this.books.length + 1,
        title: this.newBookTitle,
        author: this.newBookAuthor,
      };

      this.books.push(newBook);

      this.newBookTitle = '';
      this.newBookAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }
  protected deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

}

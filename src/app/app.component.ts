import { Component, ViewChild } from '@angular/core';
import { Book } from './book';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: string;
  loaderImg: string
  constructor() {
    this.loaderImg = '../assets/images/loader.gif'
   }
  
  @ViewChild(BookListComponent) booklist: BookListComponent;

  searchBook(query) {
    if (!query) {
      return false;
    }
    this.booklist.search(query);
  }
}

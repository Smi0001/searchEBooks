import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  library: Book[] = [];
  selectedBook: Book;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }
  
  search(query) {
    document.getElementById('j-loader').style.display = 'block';
     this.selectedBook = null;
     this.libraryService.searchBook(query).subscribe(b => {
      console.log('booklist->', b);
      if (b.status == 200) {
        let items = JSON.parse(b._body).items;
        this.library = items;
        //console.log(this.library);
        document.getElementById('j-loader').style.display = 'none';
      }
    });
  }

  selectBook(book) {
    this.selectedBook = book;
  }
}

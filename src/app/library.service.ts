import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const APIkey = 'AIzaSyCrtzI1nWf237o8aZ3acp-mJOF1j9RuCnI';
@Injectable()
export class LibraryService {
  
  private baseUrl: string = 'https://www.googleapis.com/books/v1/volumes?';
  private library : Book[] = [];
  
  constructor(private http : Http) { }

  searchBook(q: string): Observable<any> {
    let book$ = this.http
    .get(`${this.baseUrl}q=${q}&key=${APIkey}`, {headers: this.getHeaders()})
    console.log('book$=',book$);
    return book$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}


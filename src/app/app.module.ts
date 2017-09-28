import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { appRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryService } from './library.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    HttpModule],
  bootstrap: [AppComponent],
  providers: [LibraryService]
})
export class AppModule { }

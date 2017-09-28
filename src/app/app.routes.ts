import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'search',
    component: AppComponent
  },
  // {
  //   path: 'books',
  //   component: BookListComponent
  // },
  // map '/' to '' as our default route
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
];
export const appRouterModule = RouterModule.forRoot(routes);

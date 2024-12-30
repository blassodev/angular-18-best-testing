import { Component, importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MyInputComponent } from './my-input-component/my-input.component';
import { FormsModule } from '@angular/forms';
import {
  Observable,
  Subject,
  startWith,
  tap,
  debounceTime,
  switchMap,
  of,
} from 'rxjs';
import { createReducer, on, Action } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: ReadonlyArray<Book>) => books
);

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: number }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: number }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ Book: Book }>()
);

export interface Book {
  bookId: number;
  name: string;
  place: string;
}

export const initialState: ReadonlyArray<any> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [Book])
);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyInputComponent, FormsModule],
  template: ``,
})
export class App {
  destroy = new Subject();
  _store$ = inject(Store);
  public appRuleOptions: string[] = [];
  public appRuleList: any[] = [];
  public selectedName = 'test';

  public ngOnInit(): void {
    console.log(this._store$);
    this._store$
      .pipe(takeUntil(this.destroy), select(selectBooks))
      .subscribe((userIdentificationPart: any) => {
        console.log(userIdentificationPart);
        if (userIdentificationPart && userIdentificationPart.applicationRule) {
          this.appRuleList = userIdentificationPart.applicationRule || [];
          this.appRuleOptions = userIdentificationPart.applicationRule.map(
            (x: any) => this.selectedName + '/' + x.name
          );
        }
      });
  }
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(StoreModule.forRoot({ books: booksReducer })),
  ],
});

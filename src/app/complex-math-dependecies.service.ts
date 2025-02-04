import { Injectable } from '@angular/core';
import { inject }from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComplexMathDepenceciesService {
  private apiUrl = 'https://api.com/calculate';

  private http = inject(HttpClient);

  complexCalculation(operation: string, a: number, b: number): Observable<number> {
    return this.http.get<{ result: number }>(`${this.apiUrl}?operation=${operation}&a=${a}&b=${b}`).pipe(map(response => response.result));
  }
}

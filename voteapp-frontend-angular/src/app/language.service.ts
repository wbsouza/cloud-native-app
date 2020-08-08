import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Language } from './language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private baseUrl = 'http:/localhost:5000/languages'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getLanguage(name: string): Observable<Language> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.get<Language>(url).pipe(
      tap((_) => this.log(`fetched language name=${name}`)),
      catchError(this.handleError<Language>(`getLanguage name=${name}`))
    );
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

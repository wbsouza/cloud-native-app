import { Injectable } from '@angular/core';
import { Language } from './language';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LANGUAGES } from './mock-languages';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.baseUrl}/languages`);
  }

  getLanguage(name: string): Observable<Language> {
    return this.http.get<Language>(`${this.baseUrl}/languages/${name}`);
  }

  addVote(name: string): Observable<Language> {
    return this.http.get<Language>(`${this.baseUrl}/languages/${name}/vote`);
  }
}

import { Injectable } from '@angular/core';
import { Language } from './language';

import { Observable, of } from 'rxjs';


import { LANGUAGES } from './mock-languages';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  getLanguages(): Observable<Language[]> {
    const resp: Language[] = [];
    // tslint:disable-next-line: forin
    for (let key in LANGUAGES) {
      resp.push(LANGUAGES[key]);
    }
    return of(resp);
  }

  getLanguage(name: string): Observable<Language> {
    return of(LANGUAGES[name]);
  }

  addVote(name: string): Observable<Language> {
    const lang = LANGUAGES[name];
    lang.codedetail.votes++;
    return of(lang);
  }
}


/********************* TODO: TO BE CONTINUED !

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


  constructor(private http: HttpClient) {
  }


  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.baseUrl + '/languages');
  }

  getLanguage(name: string): Observable<Language> {
    return this.http.get<Language>(this.baseUrl + '/language/' + name);
  }

  addVote(name: string): Observable<Language> {
    return this.http.get<Language>(this.baseUrl + '/language/' + name + '/vote');
  }

}
*/

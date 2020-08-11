import { Injectable } from '@angular/core';

import { Language } from './language';

import { LANGUAGES } from './mock-languages';



@Injectable({
  providedIn: 'root',
})
export class LanguageService {


  getLanguage(name: string): Language {
    return LANGUAGES[name];
  }

}

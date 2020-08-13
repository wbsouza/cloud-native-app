import { Injectable } from '@angular/core';

import { Language } from './language';

import { LANGUAGES } from './mock-languages';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  getLanguages(): Language[] {
    const resp: Language[] = [];
    // tslint:disable-next-line: forin
    for (let key in LANGUAGES) {
      resp.push(LANGUAGES[key]);
    }
    return resp;
  }

  getLanguage(name: string): Language {
    return LANGUAGES[name];
  }

  addVote(languageName: string): Language {
    var language = this.getLanguage(languageName);
    language.codedetail.votes++;
    return language;
  }
}

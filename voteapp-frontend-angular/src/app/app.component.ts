import { Component, OnInit } from '@angular/core';

import { LanguageService } from './language.service';
import { Language } from './language';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'voteapp-frontend-angular';


  languages: Language[];

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languages = this.languageService.getLanguages();
  }


}

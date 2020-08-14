import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../language';
import { LanguageService } from '../language.service';

import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {

  @Input() set name(value: string) {
    this.loadLanguage(value);
  }

  language: Language;

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {}

  loadLanguage(name: string): void {
    this.languageService.getLanguage(name).subscribe(lang => this.language = lang);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../language';
import { LanguageService } from '../language.service';
import { LANGUAGES } from '../mock-languages';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {

  @Input() set name(value: string) {
    this.loadLanguage(value);
  }

  languages: Language[];
  language: Language;

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languages = this.languageService.getLanguages();
  }

  loadLanguage(name: string): void {
    this.language = this.languageService.getLanguage(name);
  }

}

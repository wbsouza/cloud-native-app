import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from '../language';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {

  @Input() set name(value: string) {
    this.getLanguage(value);
  }

  language: Language;

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {}

  getLanguage(name: string): void {
    this.language = this.languageService.getLanguage(name);
  }

}

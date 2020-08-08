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
  language: Language;

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getLanguage();
  }

  getLanguage(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.languageService
      .getLanguage(name)
      .subscribe((value) => (this.language = value));
  }
}

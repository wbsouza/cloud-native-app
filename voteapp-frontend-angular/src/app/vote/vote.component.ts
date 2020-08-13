import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from '../language';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  _languageName: string;
  votes: number;

  @Input() set language(value: string) {
    console.log(value);
    this._languageName = value;
    var language = this.languageService.getLanguage(value);
    this.votes = language.codedetail.votes;
  }

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  onVote(): void {
    var language = this.languageService.addVote(this._languageName);
    this.votes = language.codedetail.votes;
    // const lang = this.languageService.addVote(this._language);
    // this._language.codedetail.votes = lang.codedetail.votes;
    console.log(`language: ${language.name}, votes: ${language.codedetail.votes}`);
  }
}

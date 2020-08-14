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

  languageName: string;
  votes: number;

  @Input() set language(value: string) {
    this.languageName = value;
    this.languageService.getLanguage(value).subscribe(lang => {
      this.votes = lang.codedetail.votes;
    });
  }

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  onVote(): void {
    this.languageService.addVote(this.languageName).subscribe(lang => {
      this.votes = lang.codedetail.votes;
    });
  }
}

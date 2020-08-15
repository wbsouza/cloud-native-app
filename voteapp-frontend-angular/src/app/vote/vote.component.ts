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
  @Input() language;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  onVote(): void {
    this.languageService.addVote(this.language.name).subscribe((lang) => {
      this.language = lang;
    });
  }
}

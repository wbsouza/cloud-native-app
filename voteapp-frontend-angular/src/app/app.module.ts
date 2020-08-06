import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { VoteComponent } from './vote/vote.component';

import { CodeDetail, ProgrammingLanguage } from '../programming-language';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammingLanguageComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';
import { VoteComponent } from './vote/vote.component';

import { CodeDetail, Language } from './language';

@NgModule({
  declarations: [AppComponent, LanguageComponent, VoteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

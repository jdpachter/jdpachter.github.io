import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { BioComponent } from './bio/bio.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { HighlightDirective } from './highlight.directive';
import { PhraseDirective } from './phrase.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    BioComponent,
    WordcloudComponent,
    HighlightDirective,
    PhraseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

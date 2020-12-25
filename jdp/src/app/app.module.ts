import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { PanesComponent } from './panes/panes.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    PanesComponent,
    WordcloudComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

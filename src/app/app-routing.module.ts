import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WordcloudComponent } from './wordcloud/wordcloud.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: 'wordcloud', component: WordcloudComponent}
];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

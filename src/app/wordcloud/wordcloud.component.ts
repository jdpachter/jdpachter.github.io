import { Component, OnInit } from '@angular/core';
import { WORDS } from './allWords'

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})
export class WordcloudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(WORDS);
  }

}

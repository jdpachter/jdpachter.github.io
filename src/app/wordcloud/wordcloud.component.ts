import { Component, OnInit, ElementRef, ViewChildren, ViewChild, QueryList, AfterViewInit } from '@angular/core';
import { WORDS } from './allWords';
import { Word } from './word';
import { PhraseDirective } from '../phrase.directive';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})
export class WordcloudComponent implements OnInit, AfterViewInit {
  @ViewChildren(PhraseDirective) phraseElements!: QueryList<PhraseDirective>;
  @ViewChild('wordCloud', {static: false}) wordCloud!: ElementRef;
  resizeObservable$!: Observable<Event>;
  resizeSubscription$!: Subscription;
  allPhrases = this.shuffle(WORDS);
  cloudElement: ElementRef;

  constructor(private el: ElementRef) {
    this.cloudElement = el;
  }

  private shuffle(wordList: Word[]): Word[] {
    for (let i = wordList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordList[i], wordList[j]] = [wordList[j], wordList[i]];
    }
    return wordList;
  }

  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.generateWordCloud(this.getWidth(), this.getHeight());
    });
  }

  ngAfterViewInit() {
    this.generateWordCloud(this.getWidth(), this.getHeight());
  }

  generateWordCloud(width: number, height: number): void {
    var curRow = 0, numPlaced = 0, numPerRow = 5;
    const totalRows = this.phraseElements.length/numPerRow;
    var rowHeight = height/totalRows;
    var currentLeftPosition = 0;

    this.phraseElements.toArray().forEach(phrase => {
      var curPhraseWidth = phrase.el.nativeElement.clientWidth;
      curRow = Math.floor(numPlaced/numPerRow);
      var numRemainingInRow = numPerRow - (numPlaced % numPerRow);
      if(numPlaced % numPerRow == 0) {
        currentLeftPosition = this.getRandInRange(curPhraseWidth*1.1, width/(numRemainingInRow));
      }
      var currentTopPosition = curRow*rowHeight;
      if (curRow == Math.floor(totalRows)) {
        var numRemainingLastRow = this.phraseElements.length - numPlaced;
        var leftOffset = this.getRandInRange(curPhraseWidth, width/numRemainingLastRow);
      } else {
        var leftOffset = this.getRandInRange(curPhraseWidth, width/numPerRow);
      }
      phrase.setPosition(currentLeftPosition*1.18, currentTopPosition);
      currentLeftPosition += leftOffset;
      numPlaced++;
    });
  }

  private getWidth(): number {
    return this.wordCloud.nativeElement.offsetWidth;
  }

  private getHeight(): number {
    return this.wordCloud.nativeElement.offsetHeight;
  }

  private  getRandInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}

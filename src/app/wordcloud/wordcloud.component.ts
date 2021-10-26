import { Component, OnInit, ElementRef, ViewChildren, ViewChild, QueryList, AfterViewInit } from '@angular/core';
import { WORDS } from './allWords';
import { Pixel } from './pixel'
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
    var overlapping = new Map();
    this.phraseElements.toArray().forEach(phrase => {
      var curPhraseWidth = phrase.width;
      var curPhraseHeight = phrase.height;
      var currentX = Math.floor(this.getRandInRange(0, width));
      var currentY = Math.floor(this.getRandInRange(0, height));
      var curPix = new Pixel(currentX, currentY);

      while(this.checkOverlapping(curPhraseWidth, curPhraseHeight, currentX, currentY, overlapping)) {
        console.log("is overlapping: " + phrase);
        currentX = Math.floor(this.getRandInRange(0, width));
        currentY = Math.floor(this.getRandInRange(0, height));
        curPix = new Pixel(currentX, currentY);
      }
      phrase.setPosition(currentX, currentY);
      for(let xPixel = currentX; xPixel < currentX+curPhraseWidth; xPixel++) {
        for(let yPixel = currentY; yPixel < currentY+curPhraseHeight; yPixel++) {
          let p = new Pixel(xPixel, yPixel);
          overlapping.set(p.toString(), true);
        }
      }
    });
  }

  private checkOverlapping(curPhraseWidth: number, curPhraseHeight: number, currentX: number, currentY: number, overlapping: Map<string, boolean>): boolean {
    for(let xPixel = currentX-20; xPixel < currentX+curPhraseWidth+20; xPixel++) {
      for(let yPixel = currentY-20; yPixel < currentY+curPhraseHeight+20; yPixel++) {
        let p = new Pixel(xPixel, yPixel);
        if(overlapping.get(p.toString())) {
          return true;
        }
      }
    }
    return false;
  }

  private getWidth(): number {
    return this.wordCloud.nativeElement.offsetWidth;
  }

  private getHeight(): number {
    return this.wordCloud.nativeElement.offsetHeight;
  }

  private  getRandInRange(min: number, max: number) {
    if(max < min) {
      return min;
    }
    return Math.random() * (max - min) + min;
  }
}

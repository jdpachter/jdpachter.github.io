import { Directive, ElementRef, ViewChild } from '@angular/core';

@Directive({
  selector: '[appPhrase]'
})
export class PhraseDirective {
  phraseElement: ElementRef;
  width: number = 0;
  height: number = 0;

  constructor(private el: ElementRef) {
    this.phraseElement = el;
  }

  ngAfterViewInit() {
    this.width = this.phraseElement.nativeElement.clientWidth;
    this.height = this.phraseElement.nativeElement.clientHeight;

    this.phraseElement.nativeElement.style.left = 0+'px';
    this.phraseElement.nativeElement.style.top = 0+'px';
  }

  setPosition(left: number, top: number): void {
    this.phraseElement.nativeElement.style.left = left+'px';
    this.phraseElement.nativeElement.style.top = top+'px';
  }

}

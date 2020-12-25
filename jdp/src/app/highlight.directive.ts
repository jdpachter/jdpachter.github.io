import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { PanesComponent } from './panes/panes.component'

@Directive({
  selector: '[highlightSrc]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private pane: PanesComponent) {
    el.nativeElement.style.color = 'inherit';
    this.highlightText="";
  }

  @Input('highlightSrc') highlightText: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#FF7A00');
    console.log(this.highlightText)
    this.pane.showPic = true;
    this.pane.currentImgUrl = this.highlightText;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('inherit');
    this.pane.showPic = false;
  }


  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}

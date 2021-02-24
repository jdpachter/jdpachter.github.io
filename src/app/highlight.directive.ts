import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BIOIMAGES } from './bio/imgCaptionMap'
import { BioComponent } from './bio/bio.component';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private bio: BioComponent) {
    el.nativeElement.style.color = 'inherit';
    this.highlightText="";
  }

  @Input('appHighlight') highlightText: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#ff9999');
    this.bio.currentImgUrl = BIOIMAGES.get(this.highlightText)!.imgPath;
    this.bio.caption = BIOIMAGES.get(this.highlightText)!.captionText;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('inherit');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}

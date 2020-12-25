import { Component, OnInit, Directive, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

// import { HighlightDirective } from '../highlight.directive'

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Component({
  selector: 'app-panes',
  templateUrl: './panes.component.html',
  styleUrls: ['./panes.component.scss']
})
export class PanesComponent implements OnInit, AfterViewInit {
  // @ViewChildren(HighlightDirective) highlightText!: QueryList<ChildDirective>;
  currentImgUrl: string;
  showPic: boolean = false;
  defaultColors: Map<string, string> = new Map();

  constructor() {
    this.currentImgUrl = "";
  }

  ngAfterViewInit() {
    // this.highlightText.forEach(span => console.log(span));
  // viewChildren is set
  }

  ngOnInit(): void {
  }

}

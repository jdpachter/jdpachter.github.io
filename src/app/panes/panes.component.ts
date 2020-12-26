import { Component, OnInit, Directive, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Component({
  selector: 'app-panes',
  templateUrl: './panes.component.html',
  styleUrls: ['./panes.component.scss']
})
export class PanesComponent implements OnInit {
  currentImgUrl: string;
  showPic: boolean = false;

  constructor() {
    this.currentImgUrl = "";
  }

  ngOnInit(): void {
  }

}

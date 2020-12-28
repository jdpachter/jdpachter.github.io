import { Component, OnInit } from '@angular/core';

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

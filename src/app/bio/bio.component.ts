import { Component, OnInit } from '@angular/core';
import { BIOIMAGES } from './imgCaptionMap'

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  caption: string;
  currentImgUrl: string;
  showPic: boolean = false;

  constructor() {
    this.currentImgUrl = BIOIMAGES.get('sf')!.imgPath;
    this.caption = BIOIMAGES.get('sf')!.captionText;
  }

  ngOnInit(): void {

  }
}

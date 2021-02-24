import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  router: string;

  constructor(public _router: Router) {
    this.currentImgUrl = BIOIMAGES.get('sf')!.imgPath;
    this.caption = BIOIMAGES.get('sf')!.captionText;
    this.router = _router.url;
  }

  ngOnInit(): void {

  }
}

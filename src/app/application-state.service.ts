import { Injectable } from '@angular/core';

@Injectable
export class ApplicationStateService {
  private isMobileRes: boolean;

  constructor() {
    if(window.innerWidth < 750) {
      this.isMobileRes = true;
    } else {
      this.isMobileRes = false;
    }
  }

  public getIsMobileRes() {
    return this.isMobileRes;
  }
}

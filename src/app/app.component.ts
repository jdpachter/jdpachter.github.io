import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  atBio: Boolean = false;
  atHome: Boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(val => {
        if(val instanceof NavigationEnd) {
          this.urlSwitch(val.url);
        }
    });
  }

  urlSwitch(newUrl: String) {
    switch (newUrl) {
      case '/bio':
       this.atHome = false;
       this.atBio = true;
       break;
      case '/home':
       this.atHome = true;
       this.atBio = false;
       break;
      case '/':
       this.atHome = true;
       this.atBio = false;
       break;
      default:
       break;
    }
  }
}

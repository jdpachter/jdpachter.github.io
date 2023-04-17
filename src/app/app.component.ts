import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selected: String = "home";

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
        this.selected = "bio";
        break;
      case '/home':
      case '/':
      default:
        this.selected = "home";
        break;
    }
  }
}

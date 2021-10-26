import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jdp';
  scrollTop = 0;
  hideNav = false;

  @HostListener('window:scroll') onScroll(e: Event): void {
      console.log(this.getYPosition(e));
   }

  getYPosition(e: Event): number {
       return (e.target as Element).scrollTop;
  }

  // onScroll(event) {
  //   console.log("scroll");
  //   this.hideNav = this.scrollTop < event.target.scrollTop;
  //   this.scrollTop = event.target.scrollTop;
  // }

}

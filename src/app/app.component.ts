import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  @HostListener('window:scroll',['$event'])
  onScroll(event: Event):void {
    // handle scrolling event here
    console.log('scrolling..');
    console.log(window.scrollBy);
  }
}

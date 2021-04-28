import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector: '[app-root]' <div app-root><div/>
  //selector: '.app-root'  <div class="app-root"><div/>
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-complete';
}

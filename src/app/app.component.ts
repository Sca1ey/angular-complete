import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hide = false;
  clicks = [];
  toggle(): void {
    this.clicks.push(this.clicks.length + 1);
    this.hide === true ? (this.hide = false) : (this.hide = true);
  }
}

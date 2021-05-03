import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  menuItem: string = 'recipes';

  ngOnInit(): void {}

  onMenuEvent(menuItem: string) {
    this.menuItem = menuItem;
  }
}

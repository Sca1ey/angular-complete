import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() menuItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onMenuClick(menuItem: string): void {
    this.menuItem.emit(menuItem);
  }
}

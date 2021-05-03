import { Component, Output } from '@angular/core';
import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  value: number = 0;
  interval;
  @Output() valueEvent = new EventEmitter<{ value: number }>();

  start() {
    this.interval = setInterval(() => {
      this.value++;
      console.log(this.value);
      this.valueEvent.emit({ value: this.value });
    }, 2000);
    console.log('Start');
  }

  stop() {
    clearInterval(this.interval);
    this.value = 0;
    console.log('Stop');
  }
}

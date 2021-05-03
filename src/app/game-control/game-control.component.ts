import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  value: number = 0;
  interval;
  @Output('valueEvent') event: EventEmitter = new EventEmitter();

  start() {
    this.interval = setInterval(() => {
      this.value++;
      console.log(this.value);
      this.event.emit(this.value);
    }, 2000);
    console.log('Start');
  }

  stop() {
    clearInterval(this.interval);
    this.value = 0;
    console.log('Stop');
  }
}

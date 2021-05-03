import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  interval;
  @Output('counterValue') value: number = 0;

  start() {
    this.interval = setInterval(() => {
      this.value++;
      console.log(this.value);
    }, 2000);
    console.log('Start');
  }

  stop() {
    clearInterval(this.interval);
    this.value = 0;
    console.log('Stop');
  }
}

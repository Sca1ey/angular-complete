import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styles: [
    `
      p {
        background-color: red;
        color: white;
      }
    `,
  ],
})
export class WarningComponent {}

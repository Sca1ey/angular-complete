import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput;
  @ViewChild('amountInput', { static: true }) amountInput;
  @ViewChild('unitInput', { static: true }) unitInput;

  @Output() ingredient = new EventEmitter<{
    name: string;
    amount: number;
    unit: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddIngredient() {
    this.ingredient.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
      unit: this.unitInput.nativeElement.value,
    });
  }
}

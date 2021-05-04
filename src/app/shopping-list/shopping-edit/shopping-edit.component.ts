import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput;
  @ViewChild('amountInput', { static: true }) amountInput;
  @ViewChild('unitInput', { static: true }) unitInput;

  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const unit = this.unitInput.nativeElement.value;

    this.ingredient.emit(new Ingredient(name, amount, unit));
  }
}

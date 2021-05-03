import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Dough', 500, 'g'),
    new Ingredient('Tomatoes', 400, 'g'),
    new Ingredient('Mushrooms', 100, 'g'),
    new Ingredient('Onions', 1, 'small'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient) {
    this.ingredients.push(ingredient);
  }
}

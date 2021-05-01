import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Try our delicious pizza with a wide range of topping options.',
      'https://images.squaremeal.co.uk/cloud/article/9339/images/pizza-express-favourite-casual-dining-brand_18092019094334.jpg'
    ),
    new Recipe(
      'Pizza',
      'Try our delicious pizza with a wide range of topping options.',
      'https://images.squaremeal.co.uk/cloud/article/9339/images/pizza-express-favourite-casual-dining-brand_18092019094334.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

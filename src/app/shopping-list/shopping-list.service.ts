import { Subject} from 'rxjs';
import {Ingredient} from '../shared/ingredients.model';
// import {EventEmitter} from '@angular/core';

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  private  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 5),
  ];

  // tslint:disable-next-line:typedef
  getIngredients() {
    return this.ingredients.slice();
  }

  // tslint:disable-next-line:typedef
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // tslint:disable-next-line:typedef
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

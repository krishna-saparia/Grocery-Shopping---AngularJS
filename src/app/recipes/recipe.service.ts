import {RecipesModel} from './recipes.model';
// import {Subject} from 'rxjs';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
  // recipeSelected = new Subject<RecipesModel>();
  private recipes: RecipesModel[] = [
    new RecipesModel('A test recipe', 'Simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new RecipesModel('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])

  ];

  constructor(private slService: ShoppingListService) {
  }
  // tslint:disable-next-line:typedef
  getRecipes() {
    return this.recipes.slice();
  }

  // tslint:disable-next-line:typedef
  getRecipe(index: number) {
    return this.recipes[index];
  }

  // tslint:disable-next-line:typedef
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

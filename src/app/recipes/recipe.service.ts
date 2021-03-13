import {RecipesModel} from './recipes.model';
import {EventEmitter} from '@angular/core';

export class RecipeService{
  recipeSelected = new EventEmitter<RecipesModel>();
  private recipes: RecipesModel[] = [
    new RecipesModel('A test recipe', 'Simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  // tslint:disable-next-line:typedef
  getRecipes() {
    return this.recipes.slice();
  }
}

import {Component, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../recipes.model';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipesModel>();
  recipes: RecipesModel[] = [
    new RecipesModel('A test recipe', 'Simply test', '19105402-food-ingredients-and-recipe-paper-on-white-background')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onRecipeSelected(recipe: RecipesModel){
    this.recipeWasSelected.emit(recipe);
  }
}

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
    new RecipesModel('A test recipe', 'Simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onRecipeSelected(recipe: RecipesModel){
    this.recipeWasSelected.emit(recipe);
  }
}

import {Component, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../recipes.model';
import { EventEmitter } from '@angular/core';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipesModel[];
  constructor(private recipeService: RecipeService) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

}

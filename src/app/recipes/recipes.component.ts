import { Component, OnInit } from '@angular/core';
import {RecipesModel} from './recipes.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipesModel;
  constructor(private recipeService: RecipeService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: RecipesModel) => {
        this.selectedRecipe = recipe
      });
  }

}

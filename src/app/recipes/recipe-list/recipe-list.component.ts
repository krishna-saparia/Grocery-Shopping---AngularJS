import {Component, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../recipes.model';
import { EventEmitter } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipesModel[];
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }
  // tslint:disable-next-line:typedef
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

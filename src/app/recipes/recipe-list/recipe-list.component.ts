import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {RecipesModel} from '../recipes.model';
// import { EventEmitter } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: RecipesModel[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit(): void{
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: RecipesModel[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }
  // tslint:disable-next-line:typedef
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

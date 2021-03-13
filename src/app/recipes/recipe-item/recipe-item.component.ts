import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../recipes.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipesModel;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

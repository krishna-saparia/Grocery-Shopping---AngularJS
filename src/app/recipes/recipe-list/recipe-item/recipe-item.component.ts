import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../../recipes.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipesModel;
  @Input() index: number;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
}

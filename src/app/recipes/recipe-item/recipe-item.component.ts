import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipesModel;
  @Output() recipesSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSelected(){
    this.recipesSelected.emit();
  }
}

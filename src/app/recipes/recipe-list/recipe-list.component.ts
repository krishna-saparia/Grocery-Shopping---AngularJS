import { Component, OnInit } from '@angular/core';
import {RecipesModel} from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipesModel[] = [
    new RecipesModel('A test recipe', 'Simply test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.delish.com%2Fcooking%2Frecipe-ideas%2Fa19665622%2Feasy-chicken-fajitas-recipe%2F&psig=AOvVaw2CqmgMiNPS5FT_ksQcNqqX&ust=1607287113088000&source=images&cd=vfe&ved=2ahUKEwiFuNic2bftAhUiA1kFHdOHBX4QjRx6BAgAEAc')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

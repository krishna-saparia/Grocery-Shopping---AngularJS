import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppinglistService: ShoppingListService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.subscription = this.shoppinglistService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppinglistService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }
  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppinglistService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppinglistService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  // tslint:disable-next-line:typedef
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  // tslint:disable-next-line:typedef
  onDelete() {
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

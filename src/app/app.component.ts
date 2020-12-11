import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'GroceryShopping';
  loadFeature = 'recipe';
  // tslint:disable-next-line:typedef
  onNavigate(feature: string){
    this.loadFeature = feature;
  }
}

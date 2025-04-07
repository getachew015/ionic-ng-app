import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonImg } from "@ionic/angular/standalone";
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  standalone: false,
})
export class RecipeItemComponent  implements OnInit {

  @Input() recipeItem: Recipe;

  constructor() { }

  ngOnInit() {}

}

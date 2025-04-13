import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: false,
})
export class RecipesPage implements OnInit, OnDestroy {
  
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    console.log('RECIPES LOADED');
  }

  ionViewWillEnter(){
    this.recipes = this.recipesService.getRecipes();
    console.log('ionViewdWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewdDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('onDestory');
  }

}

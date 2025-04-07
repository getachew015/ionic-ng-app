import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  
  private recipes: Recipe[] = [
    {
      id: 'recp1',
      title: 'NY Strip Steak',
      imageUrl:
        'https://stemandspoon.com/wp-content/uploads/2023/08/steak-caesar-salad-recipe-5.webp',
      ingeridients: [
        'NY Strip Cut Steak',
        'Seasoning: salt, black pepper, garlic, onion',
        'Caesar Salad',
      ],
    },
    {
      id: 'recp2',
      title: 'Chicken Alferedo',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzB91qhjWWxamplwnXXDeMrrVhBPmCQgg13CAX_DRhhLtuoYoFxz6cytUVurS_eIb7jP2yQClK9xGv_KytuPZOJZWg8Ye0jatyt_YWpT0W8ZCXynOGC9cy1wIYlPzm2AZlxxSQigRvoM-x/s1600-rw/closeup+pf+a+pan+with+easy+chicken+fettuccine+alfredo.jpg',
      ingeridients: [
        'Chicken Breast',
        'Seasoning: salt, black pepper, garlic, onion',
        'Alfredo Sauce',
        'Sphagetti',
        'Chopped Cilantro',
      ],
    },
  ];

  constructor() {}

  public getRecipes() {
    return [...this.recipes];
  }

  public getRecipesById(recipeId: string) {
    return {...this.recipes.find((recipe) => {
      return recipe.id === recipeId;
    })}
  }

  public deleteRecipeById(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}

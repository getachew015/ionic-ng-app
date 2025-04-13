import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: false,
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe:Recipe;
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { 

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if(!param.has('recipeId')){
        //reroute
        this.router.navigate(['/recipes'])        
        return;
      }
      const recpId = param.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipesById(recpId);
    });
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Delete A Recipe',
      message: 'Do You Really Want To Delete This Recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipeById(this.loadedRecipe.id);
            this.router.navigate(['/recipes'])        
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}

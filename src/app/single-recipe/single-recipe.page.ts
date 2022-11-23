import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.page.html',
  styleUrls: ['./single-recipe.page.scss'],
})
export class SingleRecipePage implements OnInit {

  recipeName: string = '';
  recipe: Recipe = {
    name: '',
    speciality: '',
    description:'',
    imgPath: '',
    link: '',
  }

  constructor(private route: ActivatedRoute, private router: Router) { 

    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()!.extras.state){
        this.recipe = this.router.getCurrentNavigation()!.extras.state!['recipe'];
        console.log(this.recipe);
      }
    });

  }

  ngOnInit() {
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Recipe } from '../models/recipe';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipeList: Recipe[] = 
  [
    
  ]

  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Recipe[]>('../../assets/data/recipe.json').subscribe({
      next : res => this.recipeList = res,
      error : err => console.log(err)
  });
    }

  goToDetails(recipe: {name:string,speciality:string, description:string, imgPath:string}){
    let navigationExtras: NavigationExtras = {
      state: {
        recipe: recipe
      }
    };
    this.router.navigate(['tabs/single-recipe'], navigationExtras);
  }

}

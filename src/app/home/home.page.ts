import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}

  goToBoat(){
    this.router.navigate(['tabs/boat']);
  }
  goToRestaurant(){
    this.router.navigate(['tabs/restaurant']);
  }
  goToRecipe(){
    this.router.navigate(['tabs/recipe']);
  }
}

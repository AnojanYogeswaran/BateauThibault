import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  restaurantList: Restaurant[] = []

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    
      this.http.get<Restaurant[]>('../../assets/data/restaurant.json').subscribe({
        next : res => this.restaurantList = res,
        error : err => console.log(err)
    });
      }
  

  goToDetails(restaurant: {name:string,speciality:string, description:string, imgPath:string}){
    let navigationExtras: NavigationExtras = {
      state: {
        restaurant: restaurant
      }
    };
    this.router.navigate(['tabs/single-restaurant'], navigationExtras);
  }

}

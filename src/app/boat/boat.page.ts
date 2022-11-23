import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Boat } from '../models/boat';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-boat',
  templateUrl: './boat.page.html',
  styleUrls: ['./boat.page.scss'],
})
export class BoatPage implements OnInit {

  boatList: Boat[] = 
  [
    {
      name:'Saphir',
      description: 'C\'est un très beau bateau !',
      imgPath: 'https://st.depositphotos.com/2729617/3554/i/950/depositphotos_35542395-stock-photo-baot-at-the-beach.jpg'
    },
    {
      name:'De la brise',
      description: 'Aussi vif que l\'air !',
      imgPath:'https://cdn.pixabay.com/photo/2015/08/24/15/12/web-905128_960_720.jpg'
    },
    {
      name:'Gast Micher',
      description: 'Bateau ou Nom complet qui sait ?',
      imgPath:'https://cdn.pixabay.com/photo/2017/07/11/07/10/new-zealand-2492599_960_720.jpg'
    },
    {
      name:'Aquilon',
      description: 'Un nom très stylé, venez donc !',
      imgPath:'https://cdn.pixabay.com/photo/2018/03/24/18/37/hydrofoil-3257467_960_720.jpg'
    },
  ]

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToDetails(boat: {name:string, description:string, imgPath:string}){
    let navigationExtras: NavigationExtras = {
      state: {
        boat: boat
      }
    };
    this.router.navigate(['single-boat'], navigationExtras);
  }

}

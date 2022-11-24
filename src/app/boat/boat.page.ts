import { HttpClient } from '@angular/common/http';
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

  boatList: Boat[] = []

  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Boat[]>('../../assets/data/boat.json').subscribe({
      next : res => this.boatList = res,
      error : err => console.log(err)
  });
  }

  goToDetails(boat: {name:string, description:string, imgPath:string}){
    let navigationExtras: NavigationExtras = {
      state: {
        boat: boat
      }
    };
    this.router.navigate(['tabs/single-boat'], navigationExtras);
  }

}

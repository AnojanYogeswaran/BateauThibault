import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-boat',
  templateUrl: './boat.page.html',
  styleUrls: ['./boat.page.scss'],
})
export class BoatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

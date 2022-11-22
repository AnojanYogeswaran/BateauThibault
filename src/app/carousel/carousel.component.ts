import { Component, Input, OnInit } from '@angular/core';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  @Input() imgPath: string = '';
  @Input() libelle: string = '';
  @Input() description: string = '';
  
  constructor() { }

  ngOnInit() {}

}

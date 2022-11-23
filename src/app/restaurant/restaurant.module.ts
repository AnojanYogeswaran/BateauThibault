import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPageRoutingModule } from './restaurant-routing.module';

import { RestaurantPage } from './restaurant.page';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    SharedModule,
    SwiperModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPageRoutingModule
  ],
  declarations: [RestaurantPage]
})
export class RestaurantPageModule {}

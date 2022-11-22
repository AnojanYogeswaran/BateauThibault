import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatPageRoutingModule } from './boat-routing.module';
import { SwiperModule } from 'swiper/angular';

import { BoatPage } from './boat.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SwiperModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BoatPageRoutingModule
  ],
  declarations: [BoatPage]
})
export class BoatPageModule {}

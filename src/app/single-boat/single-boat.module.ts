import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleBoatPageRoutingModule } from './single-boat-routing.module';

import { SingleBoatPage } from './single-boat.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SingleBoatPageRoutingModule
  ],
  declarations: [SingleBoatPage]
})
export class SingleBoatPageModule {}

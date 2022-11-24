import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from '../carousel/carousel.component';



@NgModule({
  declarations: [ItemComponent, CarouselComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ItemComponent, CarouselComponent]
})
export class SharedModule { }

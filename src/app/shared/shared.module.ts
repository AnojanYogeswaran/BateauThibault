import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from '../carousel/carousel.component';
import { BasketComponent } from '../basket/basket.component';



@NgModule({
  declarations: [ItemComponent, CarouselComponent, BasketComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ItemComponent, CarouselComponent, BasketComponent]
})
export class SharedModule { }

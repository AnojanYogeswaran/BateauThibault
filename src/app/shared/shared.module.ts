import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from '../carousel/carousel.component';
import { BasketComponent } from '../basket/basket.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';



@NgModule({
  declarations: [ItemComponent, CarouselComponent, BasketComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ItemComponent, CarouselComponent, BasketComponent, PageNotFoundComponent]
})
export class SharedModule { }

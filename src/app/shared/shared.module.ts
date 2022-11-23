import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterimgComponent } from '../footerimg/footerimg.component';



@NgModule({
  declarations: [ItemComponent, CarouselComponent, FooterimgComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ItemComponent, CarouselComponent, FooterimgComponent]
})
export class SharedModule { }

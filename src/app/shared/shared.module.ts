import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [ItemComponent, CarouselComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ItemComponent, CarouselComponent, FooterComponent]
})
export class SharedModule { }

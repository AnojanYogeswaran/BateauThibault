import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {

  constructor(public menuCtlr : MenuController) { }

  ngOnInit() {}

  toggleMenu(){
    this.menuCtlr.toggle()
    console.log("Toggle Menu");
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/produit';
import { Storage } from '@ionic/storage';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  
  panierList: Product [] = []
  productList: Product [] = []
  constructor(private storage : Storage, private http : HttpClient) { }

  ngOnInit() {

    this.http.get<Product[]>('../../assets/data/products.json').subscribe({
      next : res => this.productList = res,
      error : err => console.log(err),
      
    });
    this.storage.create();
    this.getBasket()
  }

  getBasket(){
  
    return new Promise(resolve=>
      {
      this.storage.forEach((v,k)=>
        {
          console.log(v)
          console.log(k)
          this.panierList.push(JSON.parse(v))
        }).then(()=>
          {
            resolve(this.panierList);
          })
      })
    }

getBasketlength(){
this.getBasket().then(()=>console.log())


}



}

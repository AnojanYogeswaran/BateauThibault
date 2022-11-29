import { Component, OnInit } from '@angular/core';
import { Product } from '../models/produit';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  
  panierList: Product [] = []
  productList: Product [] = []
  
  constructor(
    private storage : Storage,
    private router: Router,
    private cartService : CartService
    ) { }

  ngOnInit() {
    this.storage.create();
    this.getBasket();
    this.cartService.loadCart();
    this.panierList = this.cartService.getCart()
    
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

    refresh(){
      this.router.navigate(['tabs/basket']).then(()=>{
        window.location.reload();
      })
    }

  removeFromBasket = async (product: Product) =>{
    let prod = JSON.parse(await this.storage.get(product.id.toString()));      
    if(prod.quantite >= 0){
      console.log("flop")
    }
    if(prod.quantite === 1){
      await this.storage.remove(prod.id.toString());
      console.log("Removed")
    }
    else{
      prod.quantite --;
      await this.storage.set(product.id.toString(), JSON.stringify(prod));
      console.log("Minus 1");
      console.log(await this.storage.get(product.id.toString()));
    }
  }
  async addToBasket(product: Product){
    if(await this.storage.get(product.id.toString()) == null){
      product.quantite = 1;
      await this.storage.set(product.id.toString(), JSON.stringify(product))
      let prod = JSON.parse(await this.storage.get(product.id.toString()));
      prod.quantite += 1;
      await this.storage.set(product.id.toString(), JSON.stringify(product))
      console.log(await this.storage.get(product.id.toString()));
    }
    else{
      let prod = JSON.parse(await this.storage.get(product.id.toString()))
      prod.quantite += 1;
      await this.storage.set(prod.id.toString(), JSON.stringify(prod))
      console.log(await this.storage.get(product.id.toString()));

    }
  }

  getBasketlength(){
    this.getBasket().then(()=>console.log())
  }



}
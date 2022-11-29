import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/produit';
import { Storage } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cart : Product[] = []
  private produitList : Product[] = []
  private cartItemCount = new BehaviorSubject(0)

  constructor(private http: HttpClient, private storage:Storage) { }


getProduct(){
 return this.http.get<Product[]>('../../assets/data/products.json')
}

getCart(){
  return this.cart;
}

getCartItemCount(){
  return this.cartItemCount;
}

async loadCart(){
  this.cart = JSON.parse(await this.storage.get("cart-items"))
}

saveCart(): void {
  this.storage.set('cart_items', JSON.stringify(this.cart)); 
}

addProduct(product: Product){
  let added = false;
  
  for (let p of this.cart){
    if(p.id === product.id){
      p.quantite += 1;
      added = true;
      break;
    }
  }
  if (!added) {
    product.quantite = 1;

  }
  this.cart.push(product);
  this.saveCart();

}

decreaseProduct(product: Product){
  
  }

  

removeProduct(product: Product){}

itemInCart(product: Product): boolean{
    return this.cart.findIndex(o => o.id === product.id) > -1;
}

}
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/produit';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit{
  @Input() qte : number = 0; 
  panierList :Product[]=[];
  quantite = new BehaviorSubject <number>(0)
  myAction = this.quantite.asObservable()
  
  constructor(private storage:Storage, public cd: ChangeDetectorRef,
    private cartService: CartService)
 { }

  ngOnInit() {
    this.storage.create()
    this.panierList = this.cartService.getCart()
    this.getBasketlength()
  }
  
  getBasket()
  {
    this.qte = 0;
    return new Promise(resolve=>{
    this.storage.forEach((v,k)=>
    { 

      this.qte += parseInt(JSON.parse(v).quantite);
    }).then(()=>
      {
        resolve(this.panierList);
      })
      })
  }
getBasketlength(){
  console.log("ff")
  console.log(this.quantite.getValue())
  return this.getBasket().then(()=>this.quantite.next(this.qte));
  
  
}
  

}
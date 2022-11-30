import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../models/categorie'
import { Product } from '../models/produit';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { timeStamp } from 'console';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {


   qte : number = 0; 
  panierList :Product[]=[];
  @Output() quantite = new BehaviorSubject <number>(0)
  myAction = this.quantite.asObservable()
  categorieList: Categorie [] = []
  productList: Product [] = []
  

  constructor(
    private http: HttpClient,
    private storage : Storage, 
    public menuCtlr : MenuController, 
    private toastController: ToastController,
    private cartService: CartService,
    private router : Router
    ) { }
  
  ngOnInit() {
    this.http.get<Categorie[]>('../../assets/data/categorie.json').subscribe({
      next : res => this.categorieList = res,
      error : err => console.log(err),
      
    });

    this.cartService.getProduct().subscribe({
      next : res => this.productList = res,
      error : err => console.log(err)
    });
    this.storage.create();
    this.getBasketlength()
  }

  getCatProduct(category :{id: number}){
    let array : Product []= [];
    array = this.productList.filter((el) => el.category == category.id);
    return array;
    
  }


  async addToBasket(product: Product){
    if(await this.storage.get(product.id.toString()) == null){
      product.quantite = 1;
      await this.storage.set(product.id.toString(), JSON.stringify(product))
      let prod = JSON.parse(await this.storage.get(product.id.toString()));
      prod.quantite += 1;
      await this.storage.set(product.id.toString(), JSON.stringify(product))
      console.log(await this.storage.get(product.id.toString()));
      //this.router.navigate(['tabs/basket']).then(()=>{
        //window.location.reload();
      //})
    }
    else{
      let prod = JSON.parse(await this.storage.get(product.id.toString()))
      prod.quantite += 1;
      await this.storage.set(prod.id.toString(), JSON.stringify(prod))
      console.log(await this.storage.get(product.id.toString()));
      /*this.router.navigate(['tabs/basket']).then(()=>{
        window.location.reload();
      })*/
      
    }
  }

  toggleMenu(){
    this.menuCtlr.toggle()
    console.log("Toggle Menu");
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Produit ajouter au panier',
      duration: 1200,
      position: position
    });

    await toast.present();
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
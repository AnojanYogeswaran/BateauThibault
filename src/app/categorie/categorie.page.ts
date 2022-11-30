import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie'
import { Product } from '../models/produit';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {



  categorieList: Categorie [] = []
  productList: Product [] = []
  basketList: Product[] = [];
  

  constructor(
    private http: HttpClient,
    private storage : Storage, 
    public menuCtlr : MenuController, 
    private toastController: ToastController,
    ) { }
  
  ngOnInit() {
    this.http.get<Categorie[]>('../../assets/data/categorie.json').subscribe({
      next : res => this.categorieList = res,
      error : err => console.log(err),
      
    });

    this.http.get<Product[]>('../../assets/data/products.json').subscribe({
      next : res => this.productList = res,
      error : err => console.log(err),
      
    });
    this.storage.create();
    this.getBasket();
  }

  async getBasket(){
    this.basketList = []
    return await new Promise(resolve=>
      {
      this.storage.forEach((v,k)=>
        {
          console.log(v)
          console.log(k)
          this.basketList.push(JSON.parse(v))
        }).then(()=>
          {
            resolve(console.log(this.basketList));
          })
      })
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
      /*let prod = JSON.parse(await this.storage.get(product.id.toString()));
      prod.quantite += 1;
      await this.storage.set(product.id.toString(), JSON.stringify(product))*/
      console.log(await this.storage.get(product.id.toString()));
    }
    else{
      let prod = JSON.parse(await this.storage.get(product.id.toString()))
      prod.quantite += 1;
      await this.storage.set(prod.id.toString(), JSON.stringify(prod))
      console.log(await this.storage.get(product.id.toString()));
    }
    this.getBasket();
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

}

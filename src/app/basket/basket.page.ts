import { Component, OnInit } from '@angular/core';
import { Product } from '../models/produit';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController, ToastButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  
  panierList: Product [] = []
  productList: Product [] = []
  handlerMessage = '';
  roleMessage = '';

  price : Number = 0 
  constructor(
    private storage : Storage,
    private router: Router,
    private alertController : AlertController ,
    private toastController : ToastController
    ) { }

  ngOnInit() {
    this.storage.create();
    this.getBasket()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Envoyer votre commande de '+this.price+'€',
      
      buttons: [
        {
          text: 'Oui',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            this.presentToast('top')
            this.router.navigate(['tabs/home']);
            this.storage.clear()
          },
        },
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            
          },
        }
        
      ],
    });
    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Votre commande a bien été passé',
      duration: 1200,
      position: position
    });

    await toast.present();
  }
  
  async getBasket(){
    this.panierList = []
    return await new Promise(resolve=>
      {
      this.storage.forEach((v,k)=>
        {
          console.log(v)
          console.log(k)
          this.panierList.push(JSON.parse(v))
          this.price+= JSON.parse(v).price
        }).then(()=>
          {
            resolve(console.log(this.panierList));
          })
      })
    }

    /*refresh(){
      this.router.navigate(['tabs/basket']).then(()=>{
        window.location.reload();
      })
    }*/

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
    this.getBasket()
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
    this.getBasket()
  }
}

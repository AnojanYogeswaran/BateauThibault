import { Component, Input, OnInit } from '@angular/core';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { Product } from '../models/produit';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {

  constructor(
    public menuCtlr : MenuController,
    private storage : Storage,
    private router: Router,
    private alertController : AlertController ,
    private toastController : ToastController
    ) { }

  @Input() basketList : Product[] = [];
  price : Number = 0;
  handlerMessage = '';
  roleMessage = '';

  ngOnInit() {}

  toggleMenu(){
    this.menuCtlr.toggle()
    console.log("Toggle Menu");
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
          this.price+= JSON.parse(v).price
        }).then(()=>
          {
            resolve(console.log(this.basketList));
          })
      })
    }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
      const toast = await this.toastController.create({
        message: 'Votre commande a bien été passé',
        duration: 1200,
        position: position
      });
  
      await toast.present();
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
    this.getBasket();
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

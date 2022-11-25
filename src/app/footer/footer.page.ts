import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit, OnChanges{
  qte : number = 0; 
  basket:number[]=[];
  constructor(private storage:Storage) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['qte'].currentValue)
    
  }

  ngOnInit() {
    this.storage.create()
    this.getBasketlength()
    
  }
  ngOnChange(){

  }
  getBasket(){
      this.qte = 0;
      return new Promise(resolve=>{
      this.storage.forEach((v,k)=>{
      this.qte += parseInt(v)
      }).then(()=>{
      resolve(this.basket);
      })
      })
      }
getBasketlength(){
  this.getBasket().then(()=>console.log(this.qte))
  
}
  

}

import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit{
  @Input() qte : number = 0; 
  basket:number[]=[];
  constructor(private storage:Storage, public cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.storage.create()
    this.getBasket()
  }
  
  async getBasket()
  {
    this.qte = 0;
    return await new Promise(resolve=>{
    this.storage.forEach((v,k)=>
    {
      this.qte += parseInt(JSON.parse(v).quantite);
    }).then(()=>
      {
        resolve(this.basket);
      })
      })
  }  
}

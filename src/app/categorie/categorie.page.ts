import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/categorie'
import { Product } from '../models/produit';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {



  categorieList: Categorie [] = []
  productList: Product [] = []

  constructor(private router : Router, private http: HttpClient,
    private storage : Storage) { }
  
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
  }

  getCatProduct(category :{id: number}){
    let array : Product []= [];
    array = this.productList.filter((el) => el.category == category.id);
    
    return array;
  }
  async putInBasket(product: Product){
    await this.storage.set(product.id.toString(),product);
    
    console.log(await this.storage.get(product.id.toString()));
  }

}

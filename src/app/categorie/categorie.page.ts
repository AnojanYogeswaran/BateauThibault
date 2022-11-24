import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie'

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {



  categorieList: Categorie [] = []

  constructor(private router : Categorie, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Categorie[]>('../../assets/data/recipe.json').subscribe({
      next : res => this.categorieList = res,
      error : err => console.log(err)
  });
    }

}

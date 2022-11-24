import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/categorie'

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categorieList: Categorie [] = []

  constructor(private router : Router, private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get<Categorie[]>('../../assets/data/categorie.json').subscribe({
      next : res => this.categorieList = res,
      error : err => console.log(err)
    });
  }

}

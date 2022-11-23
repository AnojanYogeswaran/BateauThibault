import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Recipe } from '../models/recipe';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipeList: Recipe[] = 
  [
    {
      name:'Féroce d\'avocat',
      speciality:'Martinique',
      description:'Le féroce d\'avocat est un mets à base d\'avocats écrasés, de morue salée préparée en chiquetaille, de piment et de divers autres ingrédients. Le nom du plat découle du piment omniprésent dans le goût du mets7. Ce plat était traditionnellement réalisé en Martinique pour le petit-déjeuner dans certaines familles.',
      imgPath:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/F%C3%A9roce_d%27avocat_et_surimi.jpg/280px-F%C3%A9roce_d%27avocat_et_surimi.jpg',
      link: 'https://www.cuisineactuelle.fr/recettes/feroce-davocats-190267'
    },
    {
      name:'Gravlax',
      speciality:'Pays scandinaves',
      description:'Le gravlax (du suédois gravlax, « saumon séché » ou « saumon enterré ») est une spécialité culinaire des cuisines traditionnelles nordiques, à base de filets de saumon cru longuement marinés, macérés, et séchés avec du sel, du sucre, du poivre et de l\'aneth.',
      imgPath:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Christmas_Eve_dinner_of_Christmas_food_-_gravlax.jpg/280px-Christmas_Eve_dinner_of_Christmas_food_-_gravlax.jpg',
      link:'https://www.cuisineactuelle.fr/recettes/gravlax-89781'
    },
    {
      name:'Marmite de thon',
      speciality:'Pays basque',
      description:'La marmite de bonite ou marmite de thon (marmitako au Pays basque, sorropotún ou marmite en Cantabrie et « marmite » en France) est un plat à base de Thunnus alalunga (thon blanc ou bonite du Nord), dont l\'origine se trouve chez les pêcheurs basques (arrantzaleak en basque) et cantabres. Il s\'agit d\'un ragoût de thon aux pommes de terre, oignons, poivrons et tomates. Dans certains endroits, il est servi réchauffé dans une cazuela en terre cuite.',
      imgPath:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Marmitako.JPG/250px-Marmitako.JPG',
      link: 'https://www.cuisineaz.com/recettes/marmite-de-thon-4239.aspx'
    },
    {
      name:'Pissaladière',
      speciality:'italie',
      description:'La pissaladière (en niçois : pissaladiera, dérivé de pissalat, « poisson salé » en occitan1), également appelée pizza all\'Andrea, piscialandrea, pizzalandrea, pissadella ou sardenaira, est une spécialité culinaire italienne à base de pâte à pain, oignons, pissalat ou anchois et d\'huile d\'olive. Le plat est une spécialité de la cuisine ligure étendue à la cuisine de la Provence méditerranéenne et à la cuisine niçoise dans laquelle on y ajoute de petites olives noires de Nice.',
      imgPath:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Pissaladi%C3%A8re_02.jpg/280px-Pissaladi%C3%A8re_02.jpg',
      link:'https://www.cuisineactuelle.fr/recettes/pissaladiere-55629'
    },
  ]

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToDetails(recipe: {name:string,speciality:string, description:string, imgPath:string}){
    let navigationExtras: NavigationExtras = {
      state: {
        recipe: recipe
      }
    };
    this.router.navigate(['tabs/single-recipe'], navigationExtras);
  }

}

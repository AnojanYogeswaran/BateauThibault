import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  restaurantList: Restaurant[] = 
  [
    {
      name: 'La Pause',
      speciality: 'Martinique',
      description: 'Restaurant moderne et coloré servant des plats traditionnels, des collations, et bien plus. Garanti fait maison !',
      imgPath: 'https://www.bellemartinique.com/wp-content/uploads/2018/02/La-Pause-Restauarnt-Les-Trois-Ilets-Martinique.jpg'
    },
    {
      name: 'Marina Bistro Restaurante',
      speciality: 'Pays scandinaves (Norvège)',
      description: 'Places assises, Service de table, Plats à emporter, Terrasse, Buffet, Parking, Stationnement dans la rue, Sert de l\'alcool, Bières & Vins, Paiements électroniques, Wi-Fi gratuit, Accepte les cartes bancaires',
      imgPath: 'https://www.rafflesmarina.com.sg/images/dining/marina-bistro/MB23_2.JPG'
    },
    {
      name: 'El Caldero Restaurante',
      speciality: 'Pays basque (Espagne)',
      description: 'La paëlla et tutti quanti',
      imgPath: 'https://www.65ymas.com/uploads/s1/10/90/84/8/miramar.jpeg'
    },
    {
      name: 'Ristorante Acqua',
      speciality: 'Italie',
      description: 'La vue sur Motobarca Desiree Grotte Marine di Vieste depuis la fenêtre de ce restaurant vous laissera un souvenir inoubliable. Tous les visiteurs aiment bien la superbe cuisine cuisine italienne à Ristorante Acqua. Vous pouvez toujours déguster un risotto fascinant, c\'est une offre spéciale de ce lieu. Sur la base des opinions des invités, les serveurs proposent un vin délicieux ici. Un café immense vous attend dans cet endroit.',
      imgPath: 'https://media-cdn.tripadvisor.com/media/photo-s/06/0c/30/4b/aqua-restaurant-lounge.jpg'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetails(restaurant: {name:string,speciality:string, description:string, imgPath:string}){
    let navigationExtras: NavigationExtras = {
      state: {
        restaurant: restaurant
      }
    };
    this.router.navigate(['tabs/single-restaurant'], navigationExtras);
  }

}

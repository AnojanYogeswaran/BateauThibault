import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterPage } from './footer.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: FooterPage,

    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'categorie',
        loadChildren: () => import('../categorie/categorie.module').then( m => m.CategoriePageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'boat',
        loadChildren: () => import('../boat/boat.module').then( m => m.BoatPageModule)
      },
      {
        path: 'single-boat',
        loadChildren: () => import('../single-boat/single-boat.module').then( m => m.SingleBoatPageModule)
      },
      {
        path: 'recipe',
        loadChildren: () => import('../recipe/recipe.module').then( m => m.RecipePageModule)
      },
      {
        path: 'single-recipe',
        loadChildren: () => import('../single-recipe/single-recipe.module').then( m => m.SingleRecipePageModule)
      },
      {
        path: 'restaurant',
        loadChildren: () => import('../restaurant/restaurant.module').then( m => m.RestaurantPageModule)
      },
      {
        path: 'single-restaurant',
        loadChildren: () => import('../single-restaurant/single-restaurant.module').then( m => m.SingleRestaurantPageModule)
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterPageRoutingModule {}

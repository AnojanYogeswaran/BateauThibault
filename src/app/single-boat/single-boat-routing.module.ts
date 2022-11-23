import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBoatPage } from './single-boat.page';

const routes: Routes = [
  {
    path: '',
    component: SingleBoatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleBoatPageRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boat } from '../models/boat';

@Component({
  selector: 'app-single-boat',
  templateUrl: './single-boat.page.html',
  styleUrls: ['./single-boat.page.scss'],
})
export class SingleBoatPage implements OnInit {

  boatName: string = ''
  boat: Boat = {
    name: '',
    description: '',
    imgPath: ''
  }

  constructor(private route: ActivatedRoute, private router: Router) { 

    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()!.extras.state){
        this.boat = this.router.getCurrentNavigation()!.extras.state!['boat'];
        console.log(this.boat);
      }
    });

  }

  ngOnInit() {
  }

}

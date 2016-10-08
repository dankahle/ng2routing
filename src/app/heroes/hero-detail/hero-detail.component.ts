import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService) {}

  ngOnInit() {

    // use snapshot if just a one-time get (like this case), i.e. this will always be called cause there will
    // always be a new component per detail as they have to go back to list to get to another detail
    // (+) converts string 'id' to a number
    let id = +this.route.snapshot.params['id'];
    this.service.getHero(id).then(hero => this.hero = hero);

    /*
    // use this if reusing this component, i.e. moving from detail to detail, then the forEach will be called each time
    // the observable emits
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getHero(id).then(hero => this.hero = hero);
    });
*/
  }

  gotoHeroes() { this.router.navigate(['/heroes']); }

}

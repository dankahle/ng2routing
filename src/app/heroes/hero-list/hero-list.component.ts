import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
      console.log('hero list const');
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = +params['id'];
      this.service.getHeroes()
        .then(heroes => this.heroes = heroes);
    });
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}

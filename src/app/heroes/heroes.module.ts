import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { heroesRouting } from './heroes.routing';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting
  ],
  declarations: [HeroListComponent, HeroDetailComponent],
  providers: [HeroService]
})
export class HeroesModule { }

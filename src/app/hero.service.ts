import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor(private heroService: HeroService) { }

    getHeroes(): Hero[] {
    return HEROES;
  }

}

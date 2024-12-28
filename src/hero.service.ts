import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroes } from './data/heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  // providedIn is used to deliver a service.
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes(): Observable<Hero[]> {
    return of(heroes);
  }
}

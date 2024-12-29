import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroes } from './data/heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  // providedIn is used to deliver a service.
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService:fetched heroes');
    return of(heroes);
  }

  // get hero based on Id:
  getHero(id: number): Observable<Hero | undefined> {
    const hero = heroes.find((hero) => {
      if (hero.id === id) {
        return true;
      }
      return false;
    });
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}

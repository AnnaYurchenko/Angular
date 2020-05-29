import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from '../model/hero';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { MessageService } from '../message.service';

// class can be ing. -> we can indicate it in constructor others component
@Injectable()
//   providedIn: 'root' //service is already available in hole project. ->app.modules providers
// })
export class HeroService {

  // inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) {
  }

//   getHero(id: number): Observable<Hero> { // will be received in future.
//     this.messageService.add(`HeroService: fetched hero id=${id}`);
// //    return of (HEROES). pipe(delay(1000)); // server gives a value in 1sec.
//     return of(HEROES.find(hero => hero.id === id));
//   }

  getHero(id: number): Observable<Hero> {
    const hero: Hero = HEROES.find(value => value.id === id);
    return of(hero).pipe(delay (200));
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}

import {Component, OnInit} from '@angular/core';
import {Hero} from '../model/hero';
import {HeroService} from '../service/hero.service';
import {Observable} from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // creates field "heroService" in class, it sets to HeroService.
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  heroes: Hero[];
  selectedHero: Hero;

  // lifecycle hook.Interface with the method onInit. It realize when the component is initialised
  ngOnInit(): void {
//    this.heroService.getHeroes()
//      .subscribe(value => this.heroes = value); // we subscribe for the moment when in futureHeroes will be the real Heroes.
    const futureHeroes: Observable<Hero[]> = this.heroService.getHeroes(); // futureListOfHeroes.
    futureHeroes.subscribe(value => this.heroes = value);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  isSelected(currentHero: Hero) {
    return currentHero === this.selectedHero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}


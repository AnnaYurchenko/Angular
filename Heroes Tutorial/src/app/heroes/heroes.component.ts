import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  heroes = HEROES;

  // hero was renamed to selectedHero
  selectedHero: Hero = { // after ":" ->type
    id: 1,
    name: 'Biergarten'
  };

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}

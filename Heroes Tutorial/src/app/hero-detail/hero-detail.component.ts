import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() // pass the value ""hero" from the parent component
  hero: Hero; // parent component is "heroes" for the "hero-detail" componentw

  constructor() { }

  ngOnInit(): void {
  }

}

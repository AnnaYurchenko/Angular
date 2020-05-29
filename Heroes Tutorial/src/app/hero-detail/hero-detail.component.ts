import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../model/hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() // pass the value ""hero" from the parent component
  hero: Hero; // parent component is "heroes" for the "hero-detail" componentw

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location // wrapper from JS
  ) {
  }

  // lifecycle hook
  ngOnInit(): void {
    this.loadHero();
  }

  loadHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}

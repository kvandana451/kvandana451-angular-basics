import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private heroService: HeroService) {}
  heroes?: Hero[];
  getHeroes() {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data.slice(1, 5);
      console.log(this.heroes);
    });
  }
  ngOnInit() {
    this.getHeroes();
  }
}

import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
// import { heroes } from '../data/heroes';
import { NgFor, NgIf } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  imports: [FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  // hero: Hero = {
  //   name: 'Windstorm',
  //   id: 1,
  // };
  // heroes: Hero[] = heroes;
  heroes?: Hero[];
  isSelected?: Hero;
  onSelect(data: Hero) {
    this.isSelected = data;
    this.messageService.add(`HeroesComponent:Selected hero id =${data.id}`);
  }
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  getHeroes() {
    this.heroService.getHeroes().subscribe((data) => (this.heroes = data));
  }
  ngOnInit() {
    this.getHeroes();
  }
}

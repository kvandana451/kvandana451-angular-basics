import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { heroes } from '../data/heroes';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-heroes',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  // hero: Hero = {
  //   name: 'Windstorm',
  //   id: 1,
  // };
  heroes: Hero[] = heroes;
  isSelected?: Hero;
  onSelect(data: Hero) {
    this.isSelected = data;
  }
  ngOnInit() {
    // console.log(heroes);
    console.log(this.isSelected);
  }
}

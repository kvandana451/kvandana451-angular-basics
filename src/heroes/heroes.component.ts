import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-heroes',
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  hero: Hero = {
    name: 'Windstorm',
    id: 1,
  };
}

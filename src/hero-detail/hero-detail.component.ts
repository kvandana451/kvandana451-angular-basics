import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  imports: [NgIf, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
  @Input() passData?: Hero;
  ngOnInit() {}
}

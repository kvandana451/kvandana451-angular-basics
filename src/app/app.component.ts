import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { MessagesComponent } from '../messages/messages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-basics';
}

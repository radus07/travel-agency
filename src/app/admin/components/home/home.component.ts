import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'ADMIN | Home';

  constructor(
    private router: Router,
  ) {
  }
}
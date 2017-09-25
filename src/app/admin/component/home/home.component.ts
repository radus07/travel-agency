import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../model/user.class';

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
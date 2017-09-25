import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'ADMIN | Home';
  // user: User = this.userService.getUser();

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }
}
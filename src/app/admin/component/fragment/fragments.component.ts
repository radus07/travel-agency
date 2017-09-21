import { Component } from '@angular/core';

import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user.class';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  user: User = this.userService.getUser();

  constructor(
    private userService: UserService
  ) {}

  logout(): void {
  }

 }

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent { }

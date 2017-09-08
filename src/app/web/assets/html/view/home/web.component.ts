import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MESSAGES } from '../../../../../app.component';
import { User } from '../../../../../model/user.class';
import { UserService } from '../../../../../service/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './web.component.html'
})
export class WebComponent {
  messages = MESSAGES.Web;
  isLogged = false;
  user: User;

  logout(): void {
    this.isLogged = false;
  }

  login(): void {
    this.isLogged = this.userService.checkIfExistUser(this.user);
  }

constructor(
  private userService: UserService
) {
  this.user = (this.userService.findByUsernameAndPassword('admin', 'admin') === undefined) ? new User() 
    : this.userService.findByUsernameAndPassword('user', 'user');
}

}

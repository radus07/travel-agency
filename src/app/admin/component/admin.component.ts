import { Component } from '@angular/core';

import { UserService } from '../../service/user.service';
import { User } from '../../model/user.class';

@Component({
  selector: 'admin-section',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  user: User = this.userService.getUser();
  
  constructor(
    private userService: UserService
  ) {}
}
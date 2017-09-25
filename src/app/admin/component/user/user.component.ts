import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'users-section',
  templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
  // user: User = this.userService.getUser();
  selectedUser: User;

  constructor(
    private userService: UserService
  ) { 
  }

  ngOnInit() { }

  setSelectedUser(user: User): void {
    this.selectedUser = user;
  }

  saveUser(): void {
    /**
     * Call save method from UserService
     */
  }
}
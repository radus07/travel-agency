import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user.class';

@Component({
  selector: 'users-section',
  templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
  // user: User = this.userService.getUser();
  selectedUser: User;

  constructor(
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
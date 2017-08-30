import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
  title = 'Users';
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);    
  }

  viewDetails(user: User): void {
    this.selectedUser = user;
    this.router.navigate(['user', this.selectedUser.id]);
  }
}
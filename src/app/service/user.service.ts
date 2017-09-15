import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user.class';
import { RoleService } from './role.service';

@Injectable()
export class UserService {
  users = [];
  isLogged: boolean = localStorage.getItem('user') != null;

  constructor(
    private roleService: RoleService,
    private router: Router
  ) {
    this.users.push({username: 'admin', password: 'admin', role: this.roleService.findByName('Admin')});
    this.users.push({username: 'user', password: 'user', role: this.roleService.findByName('User')});
  }

  findOne(user: User): User {
    return this.users.find(findUser => findUser.username === user.username && findUser.password === user.password);
  }

  checkAuthentication(user: User): boolean {
    let userFind = this.findOne(user);
    if (userFind !== undefined) {
      localStorage.setItem('user', JSON.stringify(userFind));
      this.isLogged = true;
      return true;
    } 
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLogged = false;
    this.router.navigate(['/web']);
  }

  getUser(): User {
    return (this.isLogged) ? JSON.parse(localStorage.getItem('user')) : null;
  }

  findAll(): User[] {
    return this.users;
  }

  saveUser(user: User): void {
    /**
     * Create saving algorithm
     */
  }
}
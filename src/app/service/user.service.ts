import { Injectable } from '@angular/core';

import { User } from '../model/user.class';
import { RoleService } from '../service/role.service';

@Injectable()
export class UserService {
  users = [];

  constructor(
    private roleService: RoleService
  ) {
    this.users.push({username: 'admin', password: 'admin', role: this.roleService.getRoleByName('Admin')});
    this.users.push({username: 'user', password: 'user', role: this.roleService.getRoleByName('User')});
  }

  findByUsernameAndPassword(username: string, password: string): User {
    return this.users.find(user => user.username === username && user.password === password);
  }

  checkIfExistUser(user: User): boolean {
    return (this.users.find(findUser => findUser.username === user.username && findUser.password === user.password) === undefined) ? false
      : true;
  }

}
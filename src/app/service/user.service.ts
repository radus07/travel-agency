import { Injectable } from '@angular/core';

import { User } from '../model/user.class';

const USERS: User[] = [
  {id: 1, username: 'Aliabibu'},
  {id: 2, username: 'Aliosa'},
  {id: 3, username: 'Misa'},
  {id: 4, username: 'Mark'},
  {id: 5, username: 'Admin'}
];

@Injectable()
export class UserService {

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUser(id: number): Promise<User> {
    return new Promise(resolve => {
      resolve(USERS.find(user => user.id === id))
    });
    // return USERS.find(user => user.id === id);
    // return this.getUsers()
    //   .then(users => users.find(user => user.id === id));
  }

  constructor() {
    this.getUser(1).then();
  }

}
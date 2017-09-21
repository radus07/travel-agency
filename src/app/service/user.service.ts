import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  user: any = {};
  isLogged: boolean = localStorage.getItem('user') != null;
  url = "http://localhost:8083/users";

  constructor(
    private router: Router,
    private http: Http
  ) { }

  getUsers(callback): any {
    return this.http.get(this.url + '/')
      .map((res: Response) => res.json())
      .subscribe(data => callback(data));
  }

  checkIfExistsUser(user, callback) {
    return this.http.get(this.url + '/' + user.username + '/' + user.password)
      .map((res: Response) => res.json())
      .subscribe(data => callback(data));
  }

  getUser(): any {
    return (this.isLogged) ? JSON.parse(localStorage.getItem('user')) : this.user;
  }
  
}
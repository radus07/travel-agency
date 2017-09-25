import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  url: string = "http://localhost:8083/api/users/";

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
  }

  getUsers(callback): any {
    return this.http.get(this.url)
      .subscribe(data => callback(data));
  }

  getUserById(id:number, token, callback): any {
    return this.http.get(this.url + id + '?token=' + token)
      .subscribe(data => {
        console.log(data);
        callback(data)});
  }

}
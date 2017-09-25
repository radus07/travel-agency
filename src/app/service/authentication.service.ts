import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
  url: string = "http://localhost:8083/api/authenticate";

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  checkAuthentication(user: any, callback) {
    return this.http.post(this.url, user)
      .subscribe(data => callback(data));
  }

  loginUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserDetails(): any {
    let userDetails = JSON.parse(localStorage.getItem('user'));
    /**
     * Use the atob() function for decode base64 code.
     * Use the btao() function for encode string in base64 code.
     */
    // this.userService.getUserById(userDetails.user_id, userDetails.token, (result) => {
    //   userDetails.user = result;
    // });
    return userDetails;
  }

}
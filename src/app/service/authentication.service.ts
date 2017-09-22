import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
  url: string = "http://localhost:8083/api/authenticate";

  constructor(private http: HttpClient) { }

  checkAuthentication(user, callback) {
    return this.http.post(this.url, user)
      .subscribe(data => callback(data));
  }
  
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MyAccountService } from './myAccount.service';

@Injectable()
export class AuthenticationService {
  private url: string = "http://localhost:8083/api/authenticate/";

  constructor(
    private http: HttpClient,
    private accountService: MyAccountService
  ) { }

  checkAuthentication(account: any): Observable<any> {
    return new Observable(observer => {
      this.http.post(this.url, account)
        .subscribe(data => {
          if (data === 404) {
            observer.error(404)
          } else {
            observer.next(data);
          }
      })
    })
  }

  loginAccount(account: any): Observable<any> {
    return new Observable(observer => {
      localStorage.setItem('account', JSON.stringify(account));
      this.accountService.isLogged = true;
      observer.next();
    });
  }

}
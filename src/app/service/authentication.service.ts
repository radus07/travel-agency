import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MyAccountService } from './myAccount.service';

@Injectable()
export class AuthenticationService {
  url: string = "http://localhost:8083/api/authenticate/";

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

  // getUserDetails(callback): any {
  //   /**
  //    * Use the atob() function for decode base64 code.
  //    * Use the btao() function for encode string in base64 code.
  //    */
  //   let id = JSON.parse(atob(localStorage.getItem('user').split('.')[1])).user_id;
  //   this.getUserDetailsById(id, (result) => {
  //     callback(JSON.parse(atob(result)));
  //   });
  // }

  // private getUserDetailsById(id: number, callback): any {
  //   this.http.get(this.url + 'userDetails/' + id)
  //     .subscribe(data => callback(data));
  // }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Router } from '@angular/router';

@Injectable()
export class MyAccountService {
  isLogged: boolean = (localStorage.getItem('account') !== null) ? true : false;
  url: string = "http://localhost:8083/api/myAccount/";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
  }

  logoutAccount(): void {
    localStorage.removeItem('account');
    this.isLogged = false;
    this.router.navigateByUrl('/web/sign_in');
  }

  getAccounts(callback): Observable<any> {
    return new Observable(observer => {
      this.http.get(this.url)
        .subscribe(data => {
          observer.next(data);
        });
    })
  }

  getAccountDetails(): Observable<any> {
    return new Observable(observer => {
      let id = JSON.parse(atob(localStorage.getItem('account').split('.')[1])).account_id;
      this.http.get(this.url + id + '?token=' + JSON.parse(localStorage.getItem('account')))
        .subscribe(data => {
          if (data === 404) {
            observer.error(404)
          } else {
            observer.next(data);
          }
        });
    })
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getAccounts(callback): any {
    return this.http.get(this.url)
      .subscribe(data => callback(data));
  }

  getAccountById(id: number, callback): any {
    /**
     * Http request for retrieve data from db
     */
    this.http.get(this.url + id + '?token=' + JSON.parse(localStorage.getItem('account')))
      .subscribe(data => callback(data));
  }

}
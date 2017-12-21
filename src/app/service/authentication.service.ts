import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import {MyAccountService} from './myAccount.service';

@Injectable()
export class AuthenticationService {
  private url = 'http://localhost:8083/api/authenticate/';

  constructor(private http: HttpClient,
              private accountService: MyAccountService) {
  }

  checkAuthentication(account: any): Observable<any> {
    return new Observable(observer => {
      if (account.username === 'user' && account.password === 'user') {
        observer.next({data: {username: 'user', password: 'user', isEnabled: true}});
      } else {
        observer.error(404);
      }
      /*this.http.post(this.url, account)
        .subscribe(data => {
          if (data === 404) {
            observer.error(404);
          } else {
            observer.next(data);
          }
        });*/
    });
  }

  loginAccount(account: any): Observable<any> {
    return new Observable(observer => {
      localStorage.setItem('account', JSON.stringify(account));
      this.accountService.isLogged = true;
      observer.next();
    });
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
  private url = 'http://localhost:8083/api/authenticate/';

  constructor(private http: HttpClient) {
  }

  checkAuthentication(account: any): Observable<any> {
    return new Observable(observer => {
      this.http.post(this.url, account)
        .subscribe(data => {
          if (data === 404) {
            observer.error(404);
          } else {
            observer.next(data);
          }
        });
    });
  }

  loginAccount(account: any): Observable<any> {
    return new Observable(observer => {
      localStorage.setItem('account', JSON.stringify(account));
      observer.next();
    });
  }

}

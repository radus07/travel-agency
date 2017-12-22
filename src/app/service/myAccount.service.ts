import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MyAccountService {
  isLogged: boolean = !!localStorage.getItem('account');
  private url = 'http://localhost:8083/api/myAccount/';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getAccount() {
    if (this.isLogged) {
      return this.getPublicDetails()
        .map((result) => {
          return {isLogged: this.isLogged, details: result};
        });
    } else {
      return new Observable(observer => {
        observer.next({isLogged: false});
        observer.complete();
      });
    }
  }

  logoutAccount(): void {
    localStorage.removeItem('account');
    this.isLogged = false;
    this.router.navigateByUrl('/web/sign_in');
  }

  private getPublicDetails(): Observable<any> {
    const id = JSON.parse(atob(localStorage.getItem('account').split('.')[1])).account_id;
    return this.http.get(this.url + 'publicDetails/' + id + '?token=' + JSON.parse(localStorage.getItem('account')))
      .map((result: any) => {
        return result.data;
      });
  }

  private getPersonalDetails() {
    /**
     * Like getPublicDetails()
     */
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MyAccountService {

  private url = 'http://localhost:8083/api/myAccount/';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getAccount(): any {
    if (MyAccountService.isLogged) {
      return this.getPublicDetails()
        .map((result) => {
          return {isLogged: true, details: result};
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
    this.router.navigateByUrl('/web/sign_in');
  }

  private getPublicDetails(): Observable<any> {
    const id = JSON.parse(atob(localStorage.getItem('account').split('.')[1])).account_id;
    return this.http.get(`${this.url}publicDetails/${id}`)
      .map((result: any) => {
        return result.data;
      });
  }

  private getPersonalDetails() {
    /**
     * Like getPublicDetails()
     */
  }

  static get isLogged(): boolean {
    return !!localStorage.getItem('account');
  }

  static get getToken(): string {
    return JSON.parse(localStorage.getItem('account'));
  }

}

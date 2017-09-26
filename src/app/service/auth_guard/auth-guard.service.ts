import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MyAccountService } from '../myAccount.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private myAccountService: MyAccountService,
    private router: Router
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!route.data.logged && !this.isAccountOn()) {
      return true;
    } else if (!route.data.logged && this.isAccountOn()) {
      this.router.navigateByUrl('/web/home');
    } else if (route.data.logged && !this.isAccountOn()) {
      this.notAuthenticated();
    } else if (route.data.logged && this.isAccountOn()) {
        return this.checkRoleForAccount(route.data.roles)
          .map((result) => {
            this.manageError(result);
            return true;
          });
    }
  }

  checkRoleForAccount(roles: Array<string>): Observable<any> {
    return Observable.create(result => {
      if (this.isAccountOn()) {
        let id = JSON.parse(atob(localStorage.getItem('account').split('.')[1])).account_id;
        this.myAccountService.getAccountById(id, (data) => {
          roles.forEach(role => {
            if (role === data.role.code) {
              result.next(true);
            }
          });
          result.next('notPermissions');
        });
      } else {
        result.next('notAuthenticated');
      }
    });
  }

  isAccountOn(): boolean {
    return this.myAccountService.isLogged;
  }

  manageError(error: string) {
    if (error === 'notPermissions') {
      this.notPermissions();
    } else if (error === 'notAuthenticated') {
      this.notAuthenticated();
    }
  }

  notPermissions() {
    console.log("You haven't permissions for load this page.");
    this.router.navigateByUrl('/web/home');
  }

  notAuthenticated() {
    console.log("You must be logged in for load this page.");
    this.router.navigateByUrl('/web/home');
  }

}
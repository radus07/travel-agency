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
      return this.checkRolesForAccount(route.data.roles)
        .map((result) => {
          this.manageError(result);
          return true;
        });
    }
  }

  checkRolesForAccount(roles: Array<string>): Observable<any> {
    return Observable.create(observer => {
      this.myAccountService.getPublicDetails()
        .catch(err => {
          console.log('user not found');
          return Observable.empty();
        })
        .subscribe((result) => {
          if (result.data.isEnabled !== 1) {
            observer.next('notEnabled');
          } else {
            roles.forEach(role => {
              if (role === result.data.role) {
                observer.next(true);
              }
            });
            observer.next('notPermissions');
          }          
        });
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
    } else if (error === 'notEnabled') {
      this.notEnabled();
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

  notEnabled() {
    console.log("Your account must be enabled for load this page.");
    this.router.navigateByUrl('/web/home');
  }

}
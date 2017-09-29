import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MyAccountService } from '../myAccount.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private myAccountService: MyAccountService,
    private router: Router,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.myAccountService.getAccount()
      .map((result: any) => {
        if (!route.data.logged && !result.isLogged) {
          return true;
        } else if (!route.data.logged && result.isLogged) {
          this.router.navigateByUrl('/web/home');
        } else if (route.data.logged && !result.isLogged) {
          return this.getError('unauthenticated');
        } else if (route.data.logged && result.isLogged) {
          if (!result.details.isEnabled) {
            return this.getError('disabled');
          }
          return this.checkRolesForAccount(route.data.roles, result.details)
        }
      })
      .catch(() => {
        this.router.navigate(['/web/home']);
        return Observable.of(false);
      });

  }

  private checkRolesForAccount(roles: Array<string>, account: any): boolean {
    for (let role of roles) {
      if (role === account.role) {
        return true;
      }
    }
    return this.getError('unauthorized');
  }

  private getError(error: string): boolean {
    switch (error) {
      case 'unauthenticated': {
        return this.errorHandling('You must be logged in for load this page.');
      }
      case 'unauthorized': {
        return this.errorHandling('You haven\'t permissions for load this page.');
      }
      case 'disabled': {
        return this.errorHandling('Your account must be enabled for load this page.');
      }
    }
  }

  private errorHandling(message: string): boolean {
    console.log(message);
    this.router.navigateByUrl('/web/home');
    return false;
  }

}
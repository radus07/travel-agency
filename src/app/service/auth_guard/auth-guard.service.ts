import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {MyAccountService} from '../myAccount.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private myAccountService: MyAccountService,
              private router: Router) {
  }

  static accountHasRole(account, roles): boolean {
    return roles.includes(account.details.role);
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.myAccountService.getAccount()
      .map((account: any) => {
        let error = null;
        if (route.data.logged) {
          if (!account.isLogged || (!account.details.isEnabled || (account.isLogged &&
              (account.details.isEnabled && !AuthGuardService.accountHasRole(account, route.data.roles))))) {
            error = 401;
          } else {
            return true;
          }
        } else if (!route.data.logged) {
          return (account.isLogged) ? this.router.navigateByUrl('/web/home') : true;
        }
        if (error) {
          return this.handleError(error);
        }
      });
  }

  private handleError(error: string): boolean | Observable<boolean> | Promise<boolean> {
    // todo: display a modal with message about this error
    console.log(`Error: ${error}`);
    return this.router.navigateByUrl('/web/home');
  }

}

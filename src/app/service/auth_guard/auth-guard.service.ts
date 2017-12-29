import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, GuardsCheckEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar} from '@angular/material';

import {UnauthorizedSnackBarComponent} from '../../common/components';

import {MyAccountService} from '../myAccount.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private myAccountService: MyAccountService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  static accountHasRole(account, roles): boolean {
    return roles.includes(account.details.role);
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.myAccountService.getAccount()
      .map((account: any) => {
        let error = false;
        if (route.data.logged) {
          if (!account.isLogged || (!account.details.isEnabled || (account.isLogged &&
              (account.details.isEnabled && !AuthGuardService.accountHasRole(account, route.data.roles))))) {
            error = true;
          } else {
            return true;
          }
        } else if (!route.data.logged) {
          return (account.isLogged) ? this.router.navigateByUrl('/web/home') : true;
        }
        if (error) {
          return this.throwError();
        }
      });
  }

  private throwError(): boolean | Observable<boolean> | Promise<boolean> {
    this.router.events
      .find((event) => event instanceof GuardsCheckEnd && !event.shouldActivate)
      .subscribe((guardCheck: GuardsCheckEnd) => {
        const snackBarRef = this.snackBar.openFromComponent(UnauthorizedSnackBarComponent, {
          verticalPosition: 'top',
          panelClass: ['app-unauthorized-snack-bar-white-background'],
          data: {
            url: guardCheck.url
          }
        });
        snackBarRef.instance.snackBarRef = snackBarRef;
      });
    return this.router.navigateByUrl('/web/home');
  }

}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {MyAccountService} from '../myAccount.service';

@Injectable()
export class AccountResolver implements Resolve<any> {


  constructor(
    private myAccountService: MyAccountService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.myAccountService.getAccount();
  }

}

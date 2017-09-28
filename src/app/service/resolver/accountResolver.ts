import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MyAccountService } from '../myAccount.service';

@Injectable()
export class AccountResolver implements Resolve<any> {

  
  constructor(
    private myAccountService: MyAccountService
  ) { }
  
  resolve(route: ActivatedRouteSnapshot) {
    return this.myAccountService.getAccount();
  }
  

}
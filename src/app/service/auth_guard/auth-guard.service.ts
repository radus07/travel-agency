import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { MyAccountService } from '../myAccount.service';

@Injectable()
export class AuthGuardService {

  constructor(
    private myAccountService: MyAccountService,
    private router: Router
  ) { }

  whenAccountIsOn() {
    if (this.myAccountService.isLogged) {
      return true;
    }
    alert("You must be logged in for load this page.");
    this.router.navigateByUrl('/web/home');
    return false;
  }

  whenAccountIsOff() {
    if (!this.myAccountService.isLogged) {
      return true;
    } 
    this.router.navigateByUrl('/web/home');
    return false;
  }

  checkRoleForAccount(role: string, id: number) {
    this.myAccountService.getAccountById(id, (result) => {
      if (role === result.role.code) {
        return true;
      }
      alert("You haven't permissions for load this page.");
      this.router.navigateByUrl('/web/home');
      return false;
    })
  }

}
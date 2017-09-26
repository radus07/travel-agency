import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthGuardTravelAgentService implements CanActivate {

  constructor(
    private authGuardService: AuthGuardService
  ) { }

  canActivate(): boolean {
    let id = JSON.parse(atob(localStorage.getItem('account').split('.')[1])).account_id;
    this.authGuardService.checkRoleForAccount('TRVAGN', id);
    return true;
  }
}
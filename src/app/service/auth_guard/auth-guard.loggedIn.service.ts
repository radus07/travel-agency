import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthGuardLoggedInService implements CanActivate {

  constructor(
    private authGuardService: AuthGuardService
  ) { }

  canActivate(): boolean {
    this.authGuardService.whenAccountIsOn();
    return true;
  }

}
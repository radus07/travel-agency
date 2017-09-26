import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthGuardLoggedOutService implements CanActivate {

  constructor(
    private authGuardService: AuthGuardService
  ) { }

  canActivate(): boolean {
    return this.authGuardService.whenAccountIsOff();
  }

}
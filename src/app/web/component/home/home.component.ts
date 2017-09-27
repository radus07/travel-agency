import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { MESSAGES } from '../../../app.component';
import { MyAccountService } from '../../../service/myAccount.service';

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  isLogged: boolean = this.myAccountService.isLogged;
  isEnabled: boolean;
  messages = MESSAGES.Web;
  userDetails: any = {};

  logoutAccount(): void { 
    this.myAccountService.logoutAccount();
  }

  constructor(
    private router: Router,
    private myAccountService: MyAccountService
  ) { 
    this.setIsEnabled();
  }

  private setIsEnabled() {
    if (this.isLogged) {
      this.myAccountService.getAccountDetails()
        .catch(err => {
          console.log('user not found');
          return Observable.empty();
        })
        .subscribe((result) => {
          this.isEnabled = result.data.isEnabled;
        });
    }
  }

}

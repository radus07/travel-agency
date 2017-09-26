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

import { MESSAGES } from '../../../app.component';
import { MyAccountService } from '../../../service/myAccount.service';

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  isLogged: boolean = this.accountService.isLogged;
  messages = MESSAGES.Web;
  userDetails: any = {};

  logoutAccount(): void { 
    this.accountService.logoutAccount();
  }

  constructor(
    private router: Router,
    private accountService: MyAccountService
  ) { 
    // this.authService.getUserDetails((result) => {
    //   this.userDetails = result;
    // });
  }

}

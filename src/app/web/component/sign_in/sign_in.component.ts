import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../service/authentication.service';

@Component({
  selector: 'sign_in-section',
  templateUrl: './sign_in.component.html'
})
export class SignInComponent {

  loginForm: FormGroup;
  hasErrors: boolean;
  authResultStatus: number;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) {
    this.loginForm = this.createLoginForm(this.formBuilder);
  }

  submitForm(account: any): void {
    this.hasErrors = this.validateLoginForm(this.loginForm);
    if (this.hasErrors) {
      this.authResultStatus = 0;
      return;
    }

    this.authService.checkAuthentication(account, (result) => {
      this.authResultStatus = result.status;
      if (this.authResultStatus !== 404) {
        let accountrDetails = result.data;
        this.authService.loginAccount(accountrDetails);
        this.router.navigateByUrl("/web/home");
      }
    });
  }

  private createLoginForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      "username": ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      "password": ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  private validateLoginForm(loginForm: FormGroup): boolean {
    return loginForm.invalid;
  }

}
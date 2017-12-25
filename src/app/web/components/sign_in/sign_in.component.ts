import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-sign-in-section',
  templateUrl: './sign_in.component.html',
  styleUrls: ['./sign_in.component.scss']
})
export class SignInComponent {

  loginForm: FormGroup;
  hasErrors: boolean;
  authResultStatus: number;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private router: Router) {
    this.loginForm = this.createLoginForm(this.formBuilder);
  }

  submitForm(account: any): void {
    this.hasErrors = !this.validateLoginForm(this.loginForm);
    if (!this.validateLoginForm(this.loginForm)) {
      this.authResultStatus = 0;
      return;
    }

    this.authService.checkAuthentication(account)
      .subscribe(
        result => {
          this.authService.loginAccount(result.data)
            .subscribe(() => {
              this.router.navigateByUrl('/web/home');
            });
        },
        error => {
          this.authResultStatus = error;
        }
      );
  }

  private createLoginForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  private validateLoginForm(loginForm: FormGroup): boolean {
    return loginForm.valid;
  }

}

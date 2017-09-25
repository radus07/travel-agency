import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign_in-section',
  templateUrl: './sign_in.component.html'
})
export class SignInComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.createLoginForm(this.formBuilder);
  }

  submitForm(user: any): void {
    console.log(user);
  }

  private createLoginForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      "username": ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      "password": ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

}
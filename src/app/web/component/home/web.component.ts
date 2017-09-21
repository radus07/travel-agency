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
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'web-section',
  templateUrl: './web.component.html'
})
export class WebComponent {
  messages = MESSAGES.Web;
  user: any = this.userService.getUser();
  isLogged: boolean = this.userService.isLogged;
  hasErrors: boolean = false;
  @ViewChild('loginForm') loginForm: any;

  logout(): void { }

  login(): void { 
    let user: any;
    this.userService.checkIfExistsUser(this.user, (result) => {
      console.log(result);
    });
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { 
  }

}

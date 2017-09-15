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
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'web-section',
  templateUrl: './web.component.html'
})
export class WebComponent {
  messages = MESSAGES.Web;
  user: User = this.userService.getUser();
  isLogged: boolean = this.userService.isLogged;
  hasErrors: boolean = false;
  @ViewChild('loginForm') loginForm: any;

  logout(): void {
    this.user = new User();
    this.isLogged = false;
    this.hasErrors = false;
    this.userService.logout();
  }

  login(): void {
    if (this.userService.checkAuthentication(this.user)) {
      this.user = this.userService.findOne(this.user);
      this.isLogged = true;
    } else {
      this.hasErrors = true;
    }
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    if (this.user === null) {
      this.user = new User();
    }
  }

}

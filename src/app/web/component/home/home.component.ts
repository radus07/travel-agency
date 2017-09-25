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
import { AuthenticationService } from '../../../service/authentication.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  messages = MESSAGES.Web;
  user: any = {};
  isLogged: boolean = false
  hasErrors: string = '';
  @ViewChild('loginForm') loginForm: any;

  logout(): void { }

  login(): void { 
    /**
     * Get data from login form and send it to server using authService for checking
     */
    this.authService.checkAuthentication(this.user, (result) => {
      this.hasErrors = result.status;
    });
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private userService: UserService
  ) { 
  }

}

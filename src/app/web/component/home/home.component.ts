import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  account: any;
  messages = MESSAGES.Web;

  logoutAccount(): void { 
    this.myAccountService.logoutAccount();
  }

  constructor(
    private route: ActivatedRoute,
    private myAccountService: MyAccountService
  ) { 
    this.account = this.route.snapshot.data['account'];
  }

}
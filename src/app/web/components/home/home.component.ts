import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MyAccountService} from '../../../service';

@Component({
  selector: 'app-home-section',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  account: any;

  constructor(private route: ActivatedRoute,
              private myAccountService: MyAccountService) {
    this.account = this.route.snapshot.data['account'];
  }

  logoutAccount(): void {
    this.myAccountService.logoutAccount();
  }

}

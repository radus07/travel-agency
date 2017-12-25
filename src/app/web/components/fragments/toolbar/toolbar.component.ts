import {Component, OnInit} from '@angular/core';
import {MyAccountService} from '../../../../service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private myAccountService: MyAccountService) { }

  ngOnInit() {
  }

  logoutAccount(): void {
    this.myAccountService.logoutAccount();
  }

}

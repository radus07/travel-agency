import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-section',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  account: any;

  constructor(private route: ActivatedRoute) {
    this.account = this.route.snapshot.data['account'];
  }

}

import {Component} from '@angular/core';

@Component({
  selector: 'app-admin-section',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``]
})
export class AdminComponent {

  constructor() {
  }
}
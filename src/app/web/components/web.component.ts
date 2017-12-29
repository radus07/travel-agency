import {Component} from '@angular/core';

@Component({
  selector: 'app-web-section',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      min-width: 300px;
      width: 100%;
      height: 100%;
    }
  `]
})
export class WebComponent {

}

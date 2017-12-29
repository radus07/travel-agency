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
      max-width: 1185px;
      min-width: 300px;
      margin: 0 auto;
      min-height: 500px;
      height: 100%;
    }
  `]
})
export class WebComponent {

}

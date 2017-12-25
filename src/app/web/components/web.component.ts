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
      margin: 0 auto;
    }

  `]
})
export class WebComponent {

}
